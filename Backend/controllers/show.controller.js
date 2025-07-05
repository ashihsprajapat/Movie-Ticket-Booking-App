
import axios from 'axios';
import { Movie } from './../Models/movie.js';
import { getAuth } from '@clerk/express'
import { Show } from '../Models/Show.js';

//api to get movie from imdb 
export const getNowPlayingMovies = async (req, res) => {
    try {

        const { data } = await axios.get("https://imdb-top-100-movies.p.rapidapi.com/",
            {
                headers: {
                    "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
                    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY
                }
            }
        )

        console.log("data get all movie s", data)

        res.json({ success: true, data })

    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: err.message })
    }
}

//function to addshow in 
export const addShow = async (req, res) => {
    try {

        // const { userId } = getAuth(req)

        const { showInput, showPrice, movieId } = req.body

        let movie = await Movie.findById(movieId)
        if (!movie) {
            let { data } = await axios.get(`https://imdb-top-100-movies.p.rapidapi.com/${movieId}`, {
                headers: {
                    "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
                    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY
                }
            })

            const { id, title, description, image, year, genre, rating, imdb_link, trailer, director, writers } = data;

            movie = await Movie.create({ _id: id, title, description, image, year, genre, rating, imdb_link, trailer, director, writers })
        }

        const showToCreate = []

        showInput.forEach(show => {
            const showDate = show.date
            show.time.forEach((time) => {
                const dateTimeString = `${showDate}T${time}`
                showToCreate.push({
                    movie: movieId,
                    showDateTime: new Date(dateTimeString),
                    showPrice,
                    occuopiedSeats: {}
                })
            })
        })

        if (showToCreate.length > 0) {
            await Show.insertMany(showToCreate)
        }

        res.json({ success: true, message: "show added successfully", showToCreate })

    } catch (err) {
        console.log(err)
        res.json({ success: false, message: err.message })
    }
}


//api to get all shows from the database
export const getShows = async (req, res) => {
    try {
        let shows = await Show.find({ showDateTime: { $gte: new Date() } }).populate("movie").sort({ showDateTime: 1 })

        //filter unique shows
        const uniqueShows = new Set(shows.map(show => show.movie))

        res.json({ success: true, shows: Array.from(uniqueShows) })
    } catch (err) {
        console.log(err.message)
        res.json({ message: err.message, success: false })
    }
}

//get individual show
export const getSingleShow = async (req, res) => {
    try {
        const { movieId } = req.params

        const shows = await Show.find({ movie: movieId, showDateTime: { $gte: new Date() } }).populate("movie")

        const movie = await Movie.findById(movieId)
        const dateTime = {}

        shows.forEach(show => {
            const date = show.showDateTime.toISOString().split("T")[0]
            if (!dateTime[date]) {
                dateTime[date] = []
            }
            dateTime[date].push({ time: show.showDateTime, showId: show._id })
        })

        res.json({ success: false, movie, dateTime })

    } catch (err) {
        console.log(err.message)
        res.json({ message: err.message, success: false })
    }
}
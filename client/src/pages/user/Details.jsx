

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyCastsData, dummyDateTimeData, dummyShowsData } from '../../assets/assets'
import { Heart, CirclePlay } from 'lucide-react'
import MovieCard from './../../components/Home/MovieCard';
import DateSelection from '../../components/Details/DateSelection';

function Details() {

    let { id } = useParams("id")

    const [show, setShow] = useState(null);

    const [related, setRelated] = useState([])

    const getShow = async () => {
        const show = dummyShowsData.find((movie) => movie._id === id)
        setShow({ movie: show, dateTime: dummyDateTimeData });
        console.log(show)
    }

    const getRelated = async () => {
        const reletedShows = dummyShowsData.filter(movie => movie.genres[0].id === show.movie.genres[0].id)
        console.log(reletedShows)
        setRelated(reletedShows)
    }

    useEffect(() => {
        if (!show) {
            getShow()
            return
        }
        else {
            getRelated()
        }
    }, [show, id, setRelated])

    console.log("related show", related)

    return show ? (
        <div className='text-white mb-2 min-h-screen md:w-3/4 mx-5 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-28  '>
            <div className='pt-40'>

                <div className=' flex flex-col md:flex-row gap-10 '>
                    <img src={show.movie.poster_path} className='md:w-2/5 rounded-lg' alt="" />
                    <div className='md:w-4/5  p-2'>
                        <p className='text-xl text-red-600'>English</p>
                        <p className='text-3xl font-semibold w-1/2'>{show.movie.title}</p>
                        <p className='text-sm text-gray-400'>{show.movie.overview}</p>
                        <div className='flex items-center gap-5 mt-9'>

                            <button className='px-4  flex text-sm py-2 bg-gray-700  rounded-lg gap-2 '> <CirclePlay className='w-4' />Watch Trailer</button>
                            <button className='px-4 text-sm py-2 bg-red-600 rounded-lg'>Buy Tickets</button>
                            <button className='p-2 border rounded-full bg-gray-700'>

                                <Heart className='text-white  rounded-full  w-6   cursor-pointer ' />
                            </button>

                        </div>
                    </div>
                </div>

                <div className='mx-2 mt-16'>
                    <h1 className='text-2xl'>Your Favorite Cast</h1>
                    <div className="w-full no-scrollbar overflow-x-auto  pt-20">
                        <div className="flex items-center gap-5 px-4 min-w-max">
                            {
                                show.movie.casts.slice(0, 12).map((cast, idx) => (
                                    <div key={idx} className="flex flex-col items-center min-w-[6rem]">
                                        <img
                                            src={cast.profile_path}
                                            alt={cast.name}
                                            className="rounded-full w-20 h-20 bject-cover"
                                        />
                                        <p className="mt-2 text-center text-sm font-medium">{cast.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                
                    {/* <DateSelection dateTime={show.movie.dateTime} id={show.id} /> */}
                

                <h1 className='text-2xl font-semibold mt-10'>You May Also Like</h1>

                <div className='flex flex-wrap gap-8 justify-center mt-10'>
                    {
                        related.map((show, idx) => (
                            <MovieCard key={idx} movie={show} />
                        ))
                    }
                </div>


            </div>
        </div>
    ) : (
        <div>
            <h1>Loading....</h1>
        </div>
    )
}

export default Details

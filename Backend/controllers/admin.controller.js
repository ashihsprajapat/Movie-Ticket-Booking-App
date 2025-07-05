import { Show } from "../Models/Show.js"
import { User } from './../Models/user.model.js';
import { Booking } from './../Models/booking.js';


//api to check if user is admin
export const isAdmin = async (req, res) => {

    res.json({ success: true, isAdmin: true })
}


//api to get dashboardData
export const getDasgboardData = async (req, res) => {
    try {

        const bookings = await Booking.find({ isPaid: true })

        const activeShows = await Show.find({ showDateTime: { $gte: new Date() } }).populate("movie")

        const totalUser = await User.countDocuments()

        const dashboardData = {
            totalBookings: bookings.length,
            totalRevenue: bookings.reduce((acc, booking) => acc + booking.amount, 0),
            activeShows,
            totalUser
        }

        res.json({ success: false, dashboardData })

    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: err.message })
    }
}


//aou to get all shows from the database
export const getAllShows = async (req, res) => {
    try {
        const shows = await Show.find({ showDateTime: { $gte: new Date() } }).populate("movie").sort({ showDateTime: 1 })

        res.json({ success: true, shows })
    } catch (err) {
        console.log(err.message)
        res.json({ message: err.message, success: false })
    }
}



//api to get all booking 
export const getAllBookings = async (req, res) => {
    try {

        const bookings = await Booking.find({}).populate("user").
            populate({
                path: "show",
                populate: { path: "movie" }
            }).sort({ showDateTime: -1 })

        res.json({ success: false, bookings })

    } catch (err) {
        console.log(err.message)
        res.json({ message: err.message, success: false })
    }
}
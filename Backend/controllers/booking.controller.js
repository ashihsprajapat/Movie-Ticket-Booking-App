import { Booking } from "../Models/booking.js";
import { Show } from "../Models/Show.js";


//function to check to acailability of selected seacts for amovie
const checkedSeatsAvailability = async (showId, selectedSeats) => {
    try {

        const show = await Show.findById(showId)
        if (!show)
            return false;

        const occuopiedSeats = show.occuopiedSeats;

        selectedSeats.map(seats => {
            if (occuopiedSeats[seats]) {
                return false;
            }

        })
        // const isAnySeatTaken= booKedSeats.some(seat=>occuopiedSeats[seat])
        // return !isAnySeatTaken;
        return true;

    } catch (err) {
        console.log(err.message)
        return false;
    }
}


export const createBooking = async (req, res) => {
    try {

        const { userId } = req.auth()
        const { showId, selectedSeats } = req.body;

        const { origin } = req.headers

        //check if the seat is available for the selected show
        if (!checkedSeatsAvailability(showId, selectedSeats))
            return res.json({ success: false, message: "this seat already taken so ", })

        //get show data
        const show = await Show.findById(showId).populate("movie")
        const price = show.showPrice;
        const amount = price * selectedSeats.length

        const booking = await Booking.create({
            user: userId, amount,
            show: showId,
            booKedSeats: selectedSeats
        })

        //add selected seats in show data 
        selectedSeats.map(seat => {
            show.occuopiedSeats[seats] = userId
        })
        show.markModified("occuopiedSeats")
        await show.save()

        //stripe gateway initialize

        res.json({ success: true, message: "Booking successfull", booking })

    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: err.message })
    }
}


//get  occupied seats of show
export const getOccupiedSeats = async (req, res) => {
    try {

        const { showId } = req.params

        const show = await Show.findById(show)

        occuopiedSeats = Object.keys(show.occuopiedSeats)


        res.json({ success: true, occuopiedSeats })

    } catch (err) {
        console.log(err.message)
        res.json({ success: false, message: err.message })
    }
}
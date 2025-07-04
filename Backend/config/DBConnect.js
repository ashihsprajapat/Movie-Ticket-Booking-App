
import mongoose, { connect } from "mongoose";

export const connectToDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("Connect to data base"))
        await mongoose.connect(`${process.env.BACKEND_URL}/Movie-Ticket-Booking`)

    } catch (e) {
        console.log("------error-----")
        console.log(e.message)
    }
}
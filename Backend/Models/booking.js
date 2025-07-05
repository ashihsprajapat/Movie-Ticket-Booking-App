
import mongoose, { model, Schema } from "mongoose";


const bookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    show: { type: Schema.Types.ObjectId, ref: "Show", required: true },
    amount: { type: Number, required: true },
    booKedSeats: { type: Array, required: true },
    isPaid: { type: Boolean, default: false, },
    paymentLink: { type: String, },

}, { timestamps: true })


export const Booking = model("Booking", bookingSchema);


import express from "express";
import { protectAdmin } from './../middleware/auth.js';
import { createBooking, getOccupiedSeats } from './../controllers/booking.controller.js';
const bookingRoutes= express.Router()


bookingRoutes.post("/booking", protectAdmin, createBooking)

bookingRoutes.get("/seats/:showId", getOccupiedSeats)


export default bookingRoutes;
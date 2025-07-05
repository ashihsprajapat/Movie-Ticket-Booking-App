
import express from "express";
import { getAllBookings, getAllShows, getDasgboardData, isAdmin } from "../controllers/admin.controller.js";
import { protectAdmin } from "../middleware/auth.js";
const adminRouter = express.Router()

adminRouter.get('/is-admin', protectAdmin, isAdmin)

adminRouter.get("/all-bookings", protectAdmin, getAllBookings)

adminRouter.get("/all-shows", protectAdmin, getAllShows)

adminRouter.get("/dashboard", protectAdmin, getDasgboardData)



export default adminRouter
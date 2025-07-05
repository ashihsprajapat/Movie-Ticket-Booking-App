
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectToDB } from './config/DBConnect.js';
import { clerkMiddleware } from '@clerk/express'
import { clerkClient, requireAuth, getAuth } from '@clerk/express'

//inngest dependency
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
import showRouter from './routes/shows.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import adminRouter from './routes/admin.route.js';



const app = express();



//Middleware for app
app.use(express.json())
app.use(cors({ origin: ["http://localhost:5173"] }))
app.use(clerkMiddleware())

const port = process.env.PORT || 5476;

app.listen(port, () => {
    console.log("Server running on port ", port)
})

await connectToDB()  // connect to database


app.get("/", (req, res) => { // basic api request
    res.send("Server is live")
})
app.use("/api/inngest", serve({ client: inngest, functions }));


app.use("/api/show", showRouter)
app.use("/api/booking", bookingRoutes)
app.use("/api/admin", adminRouter)
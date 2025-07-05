
import express from "express";
import {  addShow, getNowPlayingMovies, getShows, getSingleShow } from "../controllers/show.controller.js";
import { protectAdmin } from "../middleware/auth.js";

const showRouter = express.Router()

showRouter.route("/now-playing")
    .get(protectAdmin, getNowPlayingMovies)


showRouter.post("/add", protectAdmin, addShow);

showRouter.get("/all-show",protectAdmin, getShows)

showRouter.get("/all", getShows)

showRouter.get("/:movieId", getSingleShow)

export default showRouter
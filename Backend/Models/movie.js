
import mongoose, { Schema, model } from "mongoose";

const movieSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  // backdrop_path: { type: String, required: true },
  year: { type: String, required: true },
  original_language: { type: String, default: 'en' },
  //tagline: { type: String },
  genre: { type: Array, required: true },
  //  casts: { type: Array, required: true },
  rating: { type: Number, required: true },
  // runtime: { type: Number, required: true },
  imdb_link: { type: String, required: true },
  trailer: { type: String, required: true },
  director: { type: Array, default: [] },
  writers: { type: Array, default: [] },
}, { timestamps: true })

export const Movie = model("Movie", movieSchema);
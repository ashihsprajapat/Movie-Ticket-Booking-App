

import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Star, ArrowRight } from 'lucide-react'

function MovieCard({ movie }) {

    const navigate = useNavigate()

    return (
        <div>
            
            <div class="p-4border bg-gray-700 rounded-lg shadow-sm max-w-80  w-96 pt-3 pb-5 p-2 ">
                <img class="rounded-md max-h-60 w-full cursor-pointer p-1 object-cover" src={movie.poster_path} alt="officeImage"
                    onClick={() => navigate(`/movies/${movie.id}`)} />
                <p class="text-white text-xl font-semibold  mt-2">{movie.title}</p>
                <p className='justify-center text-sm items-center text-gray-400 mt-2'>{new Date(movie.release_date).getFullYear()}  <span>.</span> {movie.genres[0].name}. {Math.floor(movie.runtime / 60)}h  {movie.runtime % 60}min</p>
                <div className='justify-between flex mt-5'>
                    <button className='bg-red-500 text-white px-4 py-1 rounded-full cursor-pointer'
                        onClick={() => navigate(`/movies/${movie.id}`)}>Buy Tickets</button>
                    <p className='flex justify-center items-center gap-1'><Star className='text-red-800 w-5 h-5' />{movie.vote_average.toFixed(1)}</p>

                </div>
            </div>

        </div>
    )
}

export default MovieCard

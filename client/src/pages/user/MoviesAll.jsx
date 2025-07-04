
import React from 'react'
import { dummyShowsData } from '../../assets/assets'
import MovieCard from '../../components/Home/MovieCard'

function MoviesAll() {
    return dummyShowsData.length >0 ? (
        <div className='mt-40 mx-5 sm:mx-10 md:mx-16 lg:mx-28 xl:mx-32 min-h-[500px]'>
            <h1 className='text-3xl font-semibold '>Now Showing</h1>
            <div className=' gap-16 justify-center items-center mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    dummyShowsData.map((movie, idx) => {
                        return <MovieCard key={idx} movie={movie} />
                    })
                }   
            </div>

        </div>
    ) : (
        <div className='mt-40 mx-5 sm:mx-10 md:mx-16 lg:mx-28 xl:mx-32 min-h-[500px]'>
            <h1 className='text-3xl font-semibold items-center justify-center '>Now movies awalable</h1>

        </div>
    )
}

export default MoviesAll

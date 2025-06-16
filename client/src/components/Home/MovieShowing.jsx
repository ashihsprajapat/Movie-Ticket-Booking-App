

import { dummyShowsData } from '../../assets/assets'
import MovieCard from './MovieCard'
import { ArrowRight } from 'lucide-react'
import { assets } from './../../assets/assets';
import { useNavigate } from 'react-router-dom';
function MovieShowing() {

    const navigate= useNavigate()



    return (
        <div className='text-white mt-16'>
            <div className='flex justify-between px-3 sm:px-4 md:px-10 lg:px-15 lg:px-20 xl:mx-28'>
                <p>Now Showing</p>
                <p className='flex gap-2'>View All<ArrowRight /> </p>
            </div>
            <div class="flex flex-wrap items-center justify-center mt-20 gap-6">

                {
                    dummyShowsData.slice(0, 4).map((movie, idx) => (
                        <MovieCard movie={movie} key={idx} />
                    ))
                }

            </div>
            <center>
                <button className='bg-red-500 mt-20 text-white px-5 justify-center py-2 rounded-xl'
                onClick={()=>navigate("/movies")}>Show More</button>
            </center>
        </div>
    )
}

export default MovieShowing

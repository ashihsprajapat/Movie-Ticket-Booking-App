

import React, { useState } from 'react'
import Suggestion from '../../components/Details/Suggestion'
import { useParams } from 'react-router-dom'
import { dummyCastsData, dummyShowsData } from '../../assets/assets'

function Details() {

    let { id } = useParams("id")
    const [movie, setMovie] = useState({
        "_id": "324544",
        "id": 324544,
        "title": "In the Lost Lands",
        "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
        "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Fantasy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": "dummyCastsData",
        "release_date": "2025-02-27",
        "original_language": "en",
        "tagline": "She seeks the power to free her people.",
        "vote_average": 6.4,
        "vote_count": 15000,
        "runtime": 102,
    })


    return (
        <div className='text-white min-h-screen  bg-black'>

            <div className='flex pt-60 overflow-y-hidden gap-6 '>
                {
                    dummyCastsData.map((cast, idx)=>(
                        <div className='w-20 h-24'>
                            <img src={cast.profile_path} alt="" className='rounded-full w-full h-full' />
                            <p>{cast.name}</p>
                        </div>
                    ))
                }
            </div>
            
            <Suggestion />
        </div>
    )
}

export default Details

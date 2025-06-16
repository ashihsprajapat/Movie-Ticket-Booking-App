
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { dummyTrailers } from '../../assets/assets'
import { CirclePlay } from 'lucide-react'

function Trailler() {
    const [trailler, setTrailler] = useState(dummyTrailers[0])
    return (
        <div className='text-white mt-20 mb-32'>
            <div className="w-3/4 mx-auto rounded-lg p-2 mb-20 aspect-video relative">
                <ReactPlayer
                    className="absolute top-0 left-0"
                    url={trailler.videoUrl}
                    light={<img src={trailler.image} alt="Thumbnail" className="w-full h-full object-cover" />}
                    width="100%"
                    height="100%"
                    controls
                    playing={true}
                />
            </div>
            <div className='flex gap-5 justify-center mt-15 flex-wrap '>   {
                dummyTrailers.map((trailler, idx) => (
                    <div
                        style={{ backgroundImage: `url(${trailler.image})` }}
                        className="w-44 h-40  bg-cover bg-center rounded-xl flex items-center justify-center
                            cursor-pointer "
                        onClick={() => setTrailler(trailler)}
                    >
                        <CirclePlay className="text-white text-4xl" />
                    </div>
                ))
            }

            </div>
        </div>

    )
}

export default Trailler

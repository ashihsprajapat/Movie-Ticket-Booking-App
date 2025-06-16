

import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { MoveRight, Calendar, Clock } from 'lucide-react'

function Hero() {
    return (
        <div className="min-h-screen bg-fit bg-cover bg-center bg-no-repeat overflow-auto text-white"
            style={{ backgroundImage: "url('/backgroundImage.png')" }}>
            <div class="  mt-36  px-6 md:px-16 lg:px-24 xl:px-32 flex items-center  gap-12 pb-16 min-h-[600px]">
                {/* <!-- Text Content --> */}
                <div class="w-full mt-36 md:w-1/2 max-md:mb-8  text-left  ">
                    <img src={assets.marvelLogo} alt="" />
                    <h1 class="font-extrabold text-4xl md:text-6xl  mb-4 leading-tight w-1/2 md:w-full ">
                        Guardians
                        of the Galaxy
                    </h1>
                    <div className='flex gap-3  mb-4'>
                        <p>Action|
                            Adventure|
                            Sci-Fi</p>
                        <p className='flex gap-1'> <Calendar className='w-5' /> 2018</p>
                        <p className='flex gap-1'><Clock className='w-5' /> 2h 8m</p>
                    </div>
                    <p class="text-white text-sm mb-6">
                        In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.
                    </p>
                    <div
                        class="flex flex-col    justify-start">

                        <NavLink to={"/movies"} class=" flex w-fit rounded-full px-5 py-2 gap-2 hover:gap-3 bg-red-700" >
                            <p className="text-sm">Explore Movies</p>

                            <MoveRight />

                        </NavLink>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Hero

import React from 'react'
import { ChevronLeft } from 'lucide-react'

function DateSelection({ dateTime, id }) {
    console.log(dateTime)
    return (
        <div id='dateSelect' className='pt-32'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10relative  p-8 bg-primary/10 border border-primary/20 rounded-lg' >
                <div>
                    <p className='text-lg font-semibold'>Choose Date</p>
                    <div className="items-center flex gap-6 text-sm mt-5">
                        <ChevronLeft className="w-32" />
                        <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
                            {
                                Object.keys(dateTime).map((date, idx) => (
                                    <button key={idx} className='flex flex-col items-center justify-center h-14 w-14 *
                                aspect-square  rounded'>
                                        <span>{new Date(date).getDate()}</span>
                                        <span>{new Date(date).toLocaleDateString("en-US", { month: "short" })}</span>
                                    </button>
                                ))
                            }

                        </span>
                        <ChevronLeft className="w-32" />
                    </div>
                </div>
                            <p className='bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90
                            transition-all cursor-pointer '>Book Noe</p>
            </div>
            Date Slection
        </div>
    )
}

export default DateSelection

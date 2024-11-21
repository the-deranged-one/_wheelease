import React from 'react'
import { Advertisement, Chatbot, StretcherImg, UserImg, Vector2, Wheelchair } from '../Images'
import { Link } from 'react-router-dom'

function Hosp1() {
  return (

    <>
        <main className="bg-customGreen w-screen min-h-screen overflow-hidden">
            <div className="flex items-center justify-center bg-customGreen2 relative h-32 pt-9">
                {/* Left Arrow */}
                <div className="absolute left-10">
                    <Link to='/user'>
                        <i className="ri-arrow-left-line text-xl cursor-pointer"></i>
                    </Link>

                </div>

                {/* Title in the Center */}
                <h1 className="text-3xl font-bold">
                    <span className="border-b-4 border-black rounded-sm">US</span>ER
                </h1>

                {/* Chatbot Icon on the Right */}
                <div className="absolute right-4 lg:pr-10">
                    <img src={Chatbot} alt="chatbot" className="mt-8 cursor-pointer" />
                </div>
            </div>

            <div className='w-full h-4 bg-bar'></div>

            <div className='flex justify-start  h-22 items-center px-4'>
                <img src={UserImg} alt="userimage" />
                <div>
                  <h1 className='text-3xl  ml-4 font-bold'>Hello Reya,</h1>
                  <p className='text-center text-xl ml-4'>Welcome to hospital 1</p>
                </div>
                
            </div>
        
            <div className='h-16 flex items-center px-4'> 
              <h1 className='text-2xl font-bold'>Advertisement</h1>
            </div>
            <div>
              <img src={Advertisement} alt="advertisement" />
            </div>

            <div className='h-16 flex items-center px-4'> 
              <h1 className='text-2xl font-bold'>Booking</h1>
            </div>

            <div className='flex justify-evenly py-3 lg:justify-center' >
                <Link to='/wheelchair'>
                    <img src={Wheelchair} alt="" className='w-44 h-44 lg:mx-5' />
                </Link>

                <Link to='/stretcher'>
                    <img src={StretcherImg} alt="" className='w-44 h-44' />
                </Link>
            </div>

        
            <div className='lg:m-0 flex justify-center'>
                <img src={Vector2} alt="Vector2" />
            </div>


        </main>
    </>
)
}

export default Hosp1
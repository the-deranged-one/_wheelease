import React from 'react'
import { Chatbot, Hospital1, Hospital2, Hospital3, Hospital4, UserImg, Vector2 } from '../Images'
import { Link } from 'react-router-dom'

function User() {
    return (

        <>
            <main className="bg-customGreen w-screen min-h-screen overflow-hidden">
                <div className="flex items-center justify-center bg-customGreen2 relative h-32 pt-9">
                    {/* Left Arrow */}
                    <div className="absolute left-10">
                        <Link to='/firstpage'>
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
                    <h1 className='text-3xl  ml-4'>Hello Reya,</h1>
                </div>

                <div className='flex justify-center h-12 items-center'>
                    <h1 className='text-xl font-bold'>Select your "HOSPITAL"</h1>
                </div>

                <div className='flex justify-evenly py-5 lg:justify-center' >
                    <Link to='/hosp1'>
                        <img src={Hospital1} alt="" className='w-44 h-44 lg:mx-5' />
                    </Link>

                    <Link to='/hosp2'>
                        <img src={Hospital2} alt="" className='w-44 h-44' />
                    </Link>
                </div>

                <div className='flex justify-evenly py-5 lg:justify-center' >
                    <Link to='/hosp3'>
                        <img src={Hospital3} alt="" className='w-44 h-44 lg:mx-5' />
                    </Link>

                    <Link to='/hosp4'>
                        <img src={Hospital4} alt="" className='w-44 h-44' />
                    </Link>
                </div>


                <div className='mt-20 lg:m-0 flex justify-center'>
                    <img src={Vector2} alt="Vector2" />
                </div>


            </main>
        </>
    )
}

export default User
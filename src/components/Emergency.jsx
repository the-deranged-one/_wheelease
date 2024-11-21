import React from 'react'
import { Ambulance, Chatbot, Vector2, Wheelchair, StretcherImg } from '../Images'
import { Link } from 'react-router-dom'

const Emergency = () => {
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
                        <span className="border-b-4 border-black rounded-sm">EM</span>ERGENCY
                    </h1>

                    {/* Chatbot Icon on the Right */}
                    <div className="absolute right-4 lg:pr-10">
                        <img src={Chatbot} alt="chatbot" className="mt-8 cursor-pointer" />
                    </div>
                </div>

                <div className='w-full h-4 bg-bar'></div>


                <div className='flex justify-center p-6 items-center'>
                    <Link to='/ambulance'>
                        <img src={Ambulance} alt="ambulance" />
                    </Link>
                </div>
                <div className='flex justify-around p-6 items-center'>
                    <Link to='/wheelchair'>
                        <img src={Wheelchair} alt="wheelchair" />
                    </Link>

                    <Link to='/stretcher'>
                        <img src={StretcherImg} alt="wheelchair" />
                    </Link>
                </div>

                <div className='px-5 mt-10'>
                    <p className='text-center'>“The <span className='text-blue-800 font-bold underline'>108</span> service is a government initiative that aims </p>
                    <p className='text-center'>   to make healthcare accessible to everyone,</p>
                    <p className='text-center'> regardless of location”</p>
                </div>

               
                <div>
                     <p className='absolute bottom-2 px-5 text-red-600'>Note: The emergency wheelchair services are only available inside the hospital</p>
                     <div className='mt-16 lg:m-0 flex justify-center'>
                        <img src={Vector2} alt="Vector2" />
                     </div>
                </div>
                

            </main>
        </>
    )
}
export default Emergency
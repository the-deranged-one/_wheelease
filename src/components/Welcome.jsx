import React from 'react';
import { logo } from '../Images';
import { Link } from 'react-router-dom'; 

const Welcome = () => {
    return (
        <>
            <main className='w-screen h-screen bg-customGreen py-10 md:py-20'>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-4xl mb-2'>Welcome to</h1>
                    <h1 className='text-4xl md:text-5xl font-bold'>WheelEase</h1>
                </div>

                <div className='mt-8 md:mt-12 flex justify-center '>
                    <img src={logo} alt="wheelchair" className='sm:w-full md:h-72 lg:w-72' />
                </div>

                <div className='flex justify-center mt-16 md:mt-24'>
                    <Link to="/FirstPage">
                    <button className="bg-teal-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-teal-600 cursor-pointer py-3 px-8 md:py-5 md:px-10">
                        Get Started
                    </button>
                    </Link>
                    
                </div>
            </main>
        </>
    );
}

export default Welcome;

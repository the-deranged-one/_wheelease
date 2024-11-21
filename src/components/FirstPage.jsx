import React from 'react'
import { Emergency, User, Vector2, EMPLOYEE, NURSE, MayIHelpYou, Doctor } from '../Images'
import { Link } from 'react-router-dom'

const FirstPage = () => {
    return (
        <>
            <main className='bg-customGreen w-screen h-screen'>
                <div className='w-full h-16'>
                    <h1 className='text-3xl text-center font-bold pt-5'>Select your option</h1>
                </div>

                <div className='flex justify-evenly py-5 lg:justify-center' >
                    <Link to='/emergency'>
                        <img src={Emergency} alt="Emergency" className='w-44 h-44 lg:mx-5' />
                    </Link>

                    <Link to='/signup'>
                        <img src={User} alt="User" className='w-44 h-44' />
                    </Link>
                </div>

                <div className='flex justify-evenly py-5 lg:justify-center' >
                    <Link to='/employee'>
                        <img src={EMPLOYEE} alt="EMPLOYEE" className='w-44 h-44 lg:mx-5' />
                    </Link>
                    <Link to='/nurse'>
                        <img src={NURSE} alt="NURSE" className='w-44 h-44' />
                    </Link>
                </div>

                <div className='flex justify-evenly py-5 lg:justify-center' >
                    <Link to='/mayIHelpYou'>
                        <img src={MayIHelpYou} alt="MayIHelpYou" className='w-44 h-44 lg:mx-5' />
                    </Link>
                    <Link to='/doctor'>
                        <img src={Doctor} alt="Doctor" className='w-44 h-44' />
                    </Link>
                </div>

                <div className='flex justify-center mt-16'>
                    <img src={Vector2} alt="Vector2" />
                </div>
            </main>
        </>

    )
}

export default FirstPage
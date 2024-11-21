import React from 'react'
import { useState } from 'react'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { Apple, Facebook, Google } from '../Images';


const phoneNumberSchema = z.string().regex(/^[0-9]{10}$/, { message: "Phone Number must be exactly 10 digits and cannot contain letters" })

const emailSchema = z.string().email({ message: "Invalid email address" })

const Signup = () => {

    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phValid, setPhValid] = useState(null)
    const [emailValid, setEmailValid] = useState(null)
    const [error, setError] = useState('')

    const validatePhoneNumber = (phNo) => {
        try {
            phoneNumberSchema.parse(phNo)
            setError('')
            setPhValid(true)
        }
        catch (err) {
            setError(err.errors[0].message)
            setPhValid(false)
        }
    }

    const validateEmail = (mail) => {
        try {
            emailSchema.parse(mail)
            setError('')
            setEmailValid(true)
        }
        catch (err) {
            setError(err.errors[0].message)
            setEmailValid(false)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Get the name and value from the input field

        // Check which field is being updated
        if (name === 'phoneNumber') {
            setPhoneNumber(value); // Update the state
            validatePhoneNumber(value); // Validate phone number

        } else if (name === 'email') {
            setEmail(value); // Update the state
            validateEmail(value); // Validate email
        }
    };

    const handleSignup = (e) => {
        e.preventDefault()

        if (emailValid && phValid) {
            console.log("Email:", email);
            console.log("Phone Number:", phoneNumber);
            // Proceed with the signup process (e.g., API call)
        } else {
            setError("Please fix the errors before signing up.");
        }

    }


    return (
        <>
            <main className='bg-customGreen w-screen h-screen'>

                <div className='flex h-24 justify-start items-center px-8 bg-customGreen lg:justify-center'>
                    <Link to='/login'>
                        <h3 className='text-xl font-medium text-gray-800 '>Log in</h3>
                    </Link>

                    <h1 className='text-3xl font-medium ml-6' >
                        <span className='border-b-[6px] border-black py-2 rounded-sm'>Sign</span> up
                    </h1>
                </div>

                <div className='w-full h-4 bg-bar'></div>

                <div className='w-full h-80 mt-8'>
                    <form onSubmit={handleSignup}>

                        <div className='flex justify-evenly lg:justify-center'>
                            <label className='border-b-2 border-black lg:mr-8 flex items-center'>
                                <i className="ri-mail-fill mr-2" style={{ fontSize: '24px', }}>
                                </i>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange} // Use the new handler
                                required
                                className='bg-customGreen border-b-2 border-black py-1 lg:ml-8 px-3 focus:outline-none focus:border-green-500'
                                placeholder='Enter email.'

                            />
                            {emailValid && (
                                <div className="icon-container">
                                    <i className="ri-checkbox-circle-fill" style={{ color: 'green', fontSize: '24px' }}></i>
                                </div>
                            )}
                        </div>

                        <div className='flex justify-evenly lg:justify-center mt-3'>
                            <label className='border-b-2 border-black lg:mr-8 flex items-center'>
                                <i className="ri-phone-fill" style={{ fontSize: '24px' }}>
                                </i>

                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handleInputChange} // Use the new handler
                                required
                                className='bg-customGreen border-b-2 border-black py-1 lg:ml-8 px-3 focus:outline-none focus:border-green-500'
                                placeholder='Enter mob no.'
                            />
                            {phValid && (
                                <div className="icon-container">
                                    <i className="ri-checkbox-circle-fill" style={{ color: 'green', fontSize: '24px' }}></i>
                                </div>
                            )}
                        </div>

                        <div className='w-full h-16 flex justify-center items-center lg:mt-10'>
                            <p className=''>Sign up with your email and phone number</p>
                        </div>

                        {error && <p className="text-red-600 px-10 text-center">{error}</p>}

                        <div className='flex justify-center'>
                            <p className='font-bold'>Already have an account?</p>
                            <Link to='/login'>
                                <p className='ml-2 text-blue-700 font-bold'>Login</p>
                            </Link>
                        </div>

                        <div className='flex justify-center items-center mt-10 h-16'>
                            {phValid && emailValid && (
                                <Link to='/verification'>
                                    <button type='submit' className="bg-teal-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-teal-600 cursor-pointer py-3 px-8 md:py-5 md:px-10">
                                        signup
                                    </button>
                                </Link>

                            )}
                        </div>
                    </form>
                </div>
                <div className='mt-40'>
                    <p className='text-center font-bold'>Or Connect</p>
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <img className='h-12 mx-2' src={Google} alt="Google" />
                    <img className='h-12 mx-2' src={Apple} alt="Apple " />
                    <img className='h-11 mx-2' src={Facebook} alt="Facebook" />
                </div>
            </main>
        </>
    )
}

export default Signup
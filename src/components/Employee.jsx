import React, { useState } from 'react'



const Employee = () => {

    const[userId,setUserId]=useState('')
    const[password,setPassword]=useState('')


    return (
        <>
            <main className='bg-customGreen w-screen h-screen mt-1'>

                <div className='flex h-24 items-center px-8 bg-customGreen2 justify-center'>
                    <h3 className='text-3xl font-bold text-gray-800 '><span className='border-b-4 border-black rounded-sm'>EM</span>PLOYEE</h3>
                </div>

                <div className='w-full h-4 bg-bar mt-1'></div>

                <div className='w-full h-80 mt-8'>
                    <form >

                        <div className='flex justify-evenly lg:justify-center'>
                            <label className='border-b-2 border-black lg:mr-8 flex items-center'>
                            <i className="ri-user-fill" style={{ fontSize: '24px', color: '' }}>:</i>
                                
                            </label>
                            <input
                                type="text"
                                name="userId"
                                value={userId}
                                onChange={(e)=>{
                                    setUserId(e.target.value)
                                }}
                                required
                                className='bg-customGreen border-b-2 border-black py-1 lg:ml-8 px-3  focus:border-green-500'
                                placeholder='Enter User ID'

                            />
                            
                        </div>

                        <div className='flex justify-evenly lg:justify-center mt-3'>
                            <label className='border-b-2 border-black lg:mr-8 flex items-center'>
                            <i className="ri-lock-password-fill" style={{fontSize:'24px'}}>:
                            </i>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                required
                                className='bg-customGreen border-b-2 border-black py-1 lg:ml-8 px-3  focus:border-green-500'
                                placeholder='Enter Password'
                            />
                         
                        </div>

                        <div className='w-full h-16 flex justify-center items-center lg:mt-10'>
                            <p className=''>Continue with User ID and Password</p>
                        </div>

                       

                        <div className='flex justify-center items-center mt-10 h-16'>
                            <button type='submit' className="bg-teal-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-teal-600 cursor-pointer py-3 px-8 md:py-5 md:px-10">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Employee
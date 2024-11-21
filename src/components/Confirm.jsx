import React from 'react'
import { Tick, Vector2 } from '../Images'

function Confirm() {
    return (

        <>
            <main className='bg-customGreen w-screen h-screen'>
                <div className='flex items-center justify-center bg-customGreen2 relative h-32 pt-9'>
                    <h1 className='text-3xl font-bold '><span className='border-b-4 border-black rounded-sm'>CO</span>NFIRM</h1> 
                </div>
                <div className='w-full h-4 bg-bar mt-1'></div>
                
                <div className='flex justify-center mt-8'>
                    <img src={Tick} alt="Tick" />
                </div>

                <div className='flex justify-center mt-16 md:mt-24'>
                    <button className="bg-teal-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-teal-600 cursor-pointer py-3 px-8 md:py-5 md:px-10">
                        Done
                    </button>
                </div>

                <div className='mt-64 lg:m-0 fixed bottom-0 left-0 w-full'>
                    <img src={Vector2} alt="Vector2"/>
                </div>
                  
            </main>
        </>
  )
}


export default Confirm
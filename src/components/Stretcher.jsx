import React, { useState } from 'react';
import { Chatbot, StretcherImg, FloorBImg, FloorGImg, Floor1Img, Floor2Img, Floor3Img } from '../Images'; // Import guiding map images
import { Link } from 'react-router-dom';

function Stretcher() {
    const [selectedFloor, setSelectedFloor] = useState(null); // State to track the selected floor
    const floors = ["B", "G", "1", "2", "3"]; // Floor labels

    // Floor data with guiding maps
    const floorData = {
        B: { map: FloorBImg },
        G: { map: FloorGImg },
        1: { map: Floor1Img },
        2: { map: Floor2Img },
        3: { map: Floor3Img },
    };

    return (
        <>
            <main className="bg-customGreen w-screen min-h-screen overflow-hidden">
                {/* Header Section */}
                <div className="flex items-center justify-center bg-customGreen2 relative h-32 pt-9">
                    {/* Left Arrow */}
                    <div className="absolute left-10">
                        <Link to='/firstpage'>
                            <i className="ri-arrow-left-line text-4xl cursor-pointer"></i>
                        </Link>
                    </div>

                    {/* Title in the Center */}
                    <h1 className="text-3xl font-bold">
                        <span className="border-b-4 border-black rounded-sm">ST</span>RETCHER
                    </h1>

                    {/* Chatbot Icon on the Right */}
                    <div className="absolute right-4 lg:pr-10">
                        <img src={Chatbot} alt="chatbot" className="mt-8 cursor-pointer" />
                    </div>
                </div>

                {/* Select Floor Section */}
                <h1 className='text-2xl px-4 font-bold pt-3'>Select your floor</h1>

                {/* Floor Selection Buttons */}
                <div className="flex space-x-4 justify-center mt-6">
                    {floors.map((floor, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedFloor(floor)}
                            className={`w-12 h-12 rounded-full text-xl font-bold shadow-lg 
                            ${selectedFloor === floor ? "bg-green-500 text-white" : "bg-green-300 text-black"} 
                            focus:outline-none transition duration-200`}
                        >
                            {floor}
                        </button>
                    ))}
                </div>

                {/* Selected Floor Display */}
                {selectedFloor && (
                    <div className="text-center mt-6">
                        <h2 className="text-xl font-semibold">
                            Guiding Map for Floor: <span className="text-green-700">{selectedFloor}</span>
                        </h2>
                    </div>
                )}

                {/* Stretcher Image */}
                <h1 className='text-2xl px-4 font-bold mt-6'>Stretcher</h1>
                <img src={StretcherImg} alt="stretcher" className='mx-auto mt-4 shadow-md' />

                {/* Guiding Map */}
                <h1 className='text-2xl px-4 font-bold mt-6'>Guiding Map</h1>
                {selectedFloor && (
                    <div className="mt-4 text-center">
                        <img
                            src={floorData[selectedFloor].map}
                            alt={`Guiding map for floor ${selectedFloor}`}
                            className="mx-auto w-4/5 md:w-1/2 border border-black rounded-lg shadow-md"
                        />
                    </div>
                )}
            </main>
        </>
    );
}

export default Stretcher;

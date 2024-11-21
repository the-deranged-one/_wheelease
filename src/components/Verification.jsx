import React, { useState } from 'react';

function Verification() {
  const [otp, setOtp] = useState(new Array(4).fill('')); // Initialize an array for 4 OTP digits
  const [error, setError] = useState('');

  // Handle the OTP input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Prevent non-numeric input
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]); // Update specific OTP index

    // Move to the next input field automatically
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join(''); // Combine the OTP array into a single string
    if (enteredOtp.length !== 4) {
      setError('Please enter a 4-digit OTP');
    } else {
      setError('');
      // Add your OTP validation or submission logic here
      console.log('Entered OTP:', enteredOtp);
    }
  };

  return (
    <>
      <main className='bg-customGreen w-screen h-screen mt-1'>

        <div className='flex h-24 items-center px-8 bg-customGreen2 justify-center'>
          <h3 className='text-3xl font-bold text-gray-800 '>
            <span className='border-b-4 border-black rounded-sm'>VE</span>RIFICATION
          </h3>
        </div>

        <div className='w-full h-4 bg-bar mt-1'></div>

        {/* OTP Input Section */}
        <div className='flex justify-center lg:justify-center mt-10'>
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()} // Auto-select the field on focus
                />
              ))}
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button type="submit" className="bg-teal-500 text-white text-lg md:text-xl font-bold rounded-full hover:bg-teal-600 cursor-pointer py-3 px-8 md:py-5 md:px-10">
              Verify
            </button>
          </form>
        </div>

        <p className='text-center mt-5'>Verify your email and phone number using OTP</p>

        <div className='w-full h-16 flex justify-center items-center lg:mt-5'>
          <p>Didn't receive SMS?</p>
        </div>
      </main>
    </>
  );
}

export default Verification;

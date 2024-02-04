import React from 'react'
import NavBar from '../components/NavBar'
import img from '../assets/9575487.jpg';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className='text-center w-full px-10 py-20 flex flex-col md:flex-row'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl font-semibold mb-5' >Welcome to ForeXplore</h1>
                    <p className='text-lg '>Explore live currency exchange rates, historical data, and powerful currency conversion tools.</p>
                </div>
                <div className='rounded-3xl w-1/2 overflow-hidden'>
                    <img src={img} alt="hero-img" />
                </div>
            </div>
            <div className="animate-bounce bg-yellow-300 rounded-full p-3 cursor-pointer w-fit absolute left-[50%] bottom-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </div>


        </div>
    )
}

export default Root
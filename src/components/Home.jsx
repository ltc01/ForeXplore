import React from 'react'
import img from '../assets/5019931.jpg';

const Home = () => {
    return (
        <main>
            <section id="welcome">
                <div className='w-full lg:px-20 gap-10 pt-40 flex flex-col items-center lg:flex-row'>
                    <div className='flex px-10 flex-col justify-center items-center lg:items-start lg:w-[60%]'>
                        <h1 className='text-4xl text-slate-800 font-bold mb-5' >Welcome to ForeXplore</h1>
                        <p className='text-slate-600 text-center lg:text-left lg:mr-10 pb-10'>
                        ForeXplore is your ultimate destination for all things related to currency exchange. Whether you're a seasoned trader, a business owner managing international transactions, or someone simply curious about currency markets, ForeXplore has everything you need to navigate the world of forex with confidence.
                        </p>
                        <button className='bg-yellow-300 text-slate-900 font-semibold px-8 py-3  hover:bg-yellow-500 rounded-full w-fit'>Explore</button>
                    </div>
                    <div className='rounded-3xl lg:w-[40%] w-2/3 h-fit bg-black overflow-hidden'>
                        <img src={img} alt="hero-img" />
                    </div>
                </div>
                <div className="lg:block hidden animate-bounce bg-yellow-300 rounded-full p-3 cursor-pointer w-fit mx-auto mt-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </div>
            </section>
            

        </main>
    )
}

export default Home
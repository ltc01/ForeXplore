import React from 'react'

const Features = () => {
    const tags = [
        {
            head: "Live Exchange Rates",
            detail: "Stay up-to-date with real-time exchange rates for various currency pairs from around the world. Our live rates feature provides you with accurate and reliable data, ensuring you always have the latest information at your fingertips.",
        },
        {
            head: "Advanced Query Options",
            detail: "Dig deeper into currency market data with our advanced query options. Explore currency rates for custom timeframes, compare exchange rates between different dates, and analyze changes in exchange rates over time to identify trends, patterns, and opportunities in the market."
        },
        {
            head: "Currency Converter",
            detail: "Convert currencies quickly and easily with our intuitive currency converter tool. Whether you're traveling abroad, conducting international business, or managing your personal finances, our currency converter makes it simple to calculate accurate exchange rates and convert currencies with ease.",
        }, {
            head: "Historical Data Analysis",
            detail: "Unlock valuable insights into market trends and patterns with our historical exchange rate data. Analyze past performance, identify key trends, and make informed predictions about future market movements based on historical data spanning a wide range of currencies and time periods.",
        }
    ]
    return (
        <section id='features' className='my-32'>
            <div className='mx-auto px-10 md:px-0 md:w-1/2 text-center'>
                <h2 className="text-3xl font-semibold text-slate-800 mb-8">
                    Explore Our Features
                </h2>
                <p className="text-slate-600 mb-14">ForeXplore offers a comprehensive range of features designed to empower your currency exchange experience. Whether you're a beginner or an experienced trader, our platform provides you with the tools and resources you need to succeed in the global financial markets.</p>
            </div>
            <div className='px-10'>
                <ul className='flex flex-col gap-6 lg:flex-row'>
                    {tags.map((item, index) => (
                        <li key={index} className='bg-yellow-200 text-center rounded-3xl py-10 px-7 hover:bg-yellow-400 cursor-pointer'>
                            <h3 className='text-slate-800 font-semibold text-xl mb-3'>{item.head}</h3>
                            <p className='text-slate-600 px-2'>{item.detail}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </section>

    )
}

export default Features
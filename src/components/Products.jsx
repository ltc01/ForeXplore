import React from 'react'
import products from '../assets/9575487.jpg'

const Products = () => {
    return (
        <section id='products'>
            <div className='relative'>
                <img src={products} alt="" className='w-full object-cover h-[36rem] overflow-hidden' />
                <div className='bg-zinc-900/50 w-full absolute  top-0 bottom-0'>
                    <div className='flex flex-col justify-center items-center h-full mx-auto md:w-2/3 text-center'>
                        <h2 className="text-4xl font-semibold text-white mb-12">
                            Discover our Currency Solutions
                        </h2>
                        <p className="text-white text-xl px-6">
                            ForeXplore offers a diverse array of products tailored to enhance your currency exchange journey. Designed with user experience and convenience in mind, our products provide unparalleled value and empower you to navigate the complexities of the global financial markets with confidence.</p>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Products
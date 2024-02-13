import React from 'react'

const Contact = () => {
    return (
            <section id='contactus'>
                <div className="py-32 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-slate-800 ">Contact Us</h2>
                    <p className="mb-8 text-center text-gray-500 sm:text-xl"> Have questions or feedback? We'd love to hear from you! Feel free to reach out to our team using the contact form below, and we'll get back to you as soon as possible.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="name@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 shadow-lg px-5 text-sm font-medium text-center text-slate-900 rounded-lg bg-yellow-300 w-full hover:bg-yellow-500">Send message</button>
                        {/* <button className='py-3 shadow-lg px-10 font-medium text-center text-slate-900 rounded-lg bg-yellow-300 md:w-fit mx-auto lg:mx-0 hover:bg-yellow-500'>Explore</button> */}
                    </form>
                </div>
        </section>


    )
}

export default Contact
import React from 'react'
import Swal from 'sweetalert2';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "9be036d9-4a3f-4aa7-b967-c55e07df770a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            event.target.reset();
            let timerInterval;
            Swal.fire({
                title: "Thank You!",
                html: "We'll connect you soon.",
                timer: 5000,
                timerProgressBar: true,
                icon: "success",
                willClose: () => {
                    clearInterval(timerInterval);
                }
            })

        } else {
            console.log("Error", data);
            let timerInterval;
            Swal.fire({
                title: "Error!",
                html: "Failed, Please try again.",
                timer: 5000,
                timerProgressBar: true,
                icon: "error",
                willClose: () => {
                    clearInterval(timerInterval);
                }
            })
            
        }
    };

    return (
        <section id='contactus'>
            <div className="py-32 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-slate-800 ">Contact Us</h2>
                <p className="mb-8 text-center text-gray-500 sm:text-xl"> Have questions or feedback? We'd love to hear from you! Feel free to reach out to our team using the contact form below, and we'll get back to you as soon as possible.</p>
                <form onSubmit={onSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name='email' id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5" placeholder="name@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input type="text" id="name" name='name' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500" placeholder="Enter your name" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" required rows="6" name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 shadow-lg px-5 text-sm font-bold text-center text-slate-900 rounded-lg bg-yellow-300 w-fit hover:bg-yellow-500">Send message</button>
                    {/* <button className='py-3 shadow-lg px-10 font-medium text-center text-slate-900 rounded-lg bg-yellow-300 md:w-fit mx-auto lg:mx-0 hover:bg-yellow-500'>Explore</button> */}
                </form>
            </div>
        </section>


    )
}

export default Contact
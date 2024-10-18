import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    
    return (
        <div id='testimonial' className=''>
            <div data-aos="fade-up"  className='max-w-[736px] mx-auto mt-20 px-5 mb-20 max-lg:mt-16 max-md:mt-12 max-sm:mt-10 max-lg:mb-16 max-md:mb-12 max-sm:mb-10'>
                <div>
                    <h2 className='text-fs-4xl font-eczar font-semibold leading-[80px] max-lg:text-fs-3xl max-md:text-5xl max-sm:text-[30px]'>Let’s work together</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='gap-4 flex mt-8 max-sm:mt-5 max-sm:flex-wrap'>
                            <input type="text" id='name' required className='max-sm:py-4 py-7 text-black bg-opacity-30 rounded-xl pr-7 pl-7 max-sm:pl-6 font-semibold text-xl max-sm:text-base font-worksans bg-customcream w-[50%] max-sm:w-full outline-none' placeholder='First name' />
                            <input type="text" id='name' required className='max-sm:py-4 py-7 text-black bg-opacity-30 rounded-xl pr-7 pl-7 max-sm:pl-6 font-semibold text-xl max-sm:text-base font-worksans bg-customcream w-[50%] max-sm:w-full outline-none' placeholder='Last name' />
                        </div>
                        <div className='gap-4 flex mt-4 max-sm:flex-wrap'>
                            <input type="subject" id='subject' required className='max-sm:py-4 py-7 text-black bg-opacity-30 pr-7 font-worksans rounded-xl font-semibold text-xl max-sm:text-base work-xl pl-7 max-sm:pl-5 bg-customcream w-[37%] max-sm:w-full outline-none' placeholder='Subject' />
                            <input type="email" id='email' required className='max-sm:py-4 py-7 text-black bg-opacity-30 pr-7 font-worksans rounded-xl font-semibold text-xl max-sm:text-base worksans pl-7 max-sm:pl-6 bg-customcream w-[65%] max-sm:w-full outline-none' placeholder='Email' />
                        </div>
                        <textarea  name="message" id="message" required placeholder='Your message' className=' font-semibold text-xl pr-7 max-sm:text-base worksans w-full h-[211px] max-sm:h-40 max-sm:py-4 max-sm:pl-6 text-black bg-opacity-30 rounded-xl pt-7 pl-7 bg-customcream outline-none mt-4'></textarea>
                        <button type='submit' className="max-sm:text-base font-worksans mt-10 max-sm:mt-5 font-semibold text-xl rounded-md before:ease relative py-4 px-10 max-sm:px-6 max-sm:py-3 overflow-hidden border-4 border-black text-black transition-all duration-500 before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-500 hover:text-white hover:before:h-64 hover:before:-translate-y-32">
                            <span className="relative z-10">Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;

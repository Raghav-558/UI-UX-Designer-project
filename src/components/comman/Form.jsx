import React from 'react'

const Form = () => {
    return (
        <div className=''>
            <div className='max-w-[736px] mx-auto mt-20 px-3 mb-20 max-lg:mt-16 max-md:mt-10 max-sm:mt-8 max-lg:mb-16 max-md:mb-10 max-sm:mb-8'>
                <div>
                    <h2 className='text-fs-4xl eczar font-semibold leading-[80px] max-lg:text-fs-3xl max-md:text-5xl'>Let’s work together</h2>
                    <form action="">
                        <div className='gap-4 flex mt-8 max-sm:mt-5'>
                            <input type="text" id='name' className='py-7 text-black bg-opacity-30 rad-30 pl-7 max-sm:pl-6 font-semibold text-xl max-sm:text-base worksans bg-customcream w-[50%] outline-none' placeholder='First name' />
                            <input type="text" id='name' className='py-7 text-black bg-opacity-30 rad-30 pl-7 max-sm:pl-6 font-semibold text-xl max-sm:text-base worksans bg-customcream w-[50%] outline-none' placeholder='Last name' />
                        </div>
                        <div className='gap-4 flex mt-4'>
                            <input type="subject" id='subject' className='py-7 text-black bg-opacity-30 worksans rad-30 font-semibold text-xl max-sm:text-base work-xl pl-7 max-sm:pl-5 bg-customcream w-[37%] outline-none' placeholder='Subject' />
                            <input type="email" id='email' className='py-7 text-black bg-opacity-30 worksans rad-30 font-semibold text-xl max-sm:text-base worksans pl-7 max-sm:pl-6 bg-customcream w-[65%] outline-none' placeholder='Email' />
                        </div>
                        <textarea name="message" id="message" placeholder='Your message' className=' font-semibold text-xl max-sm:text-base worksans w-full h-[211px] max-sm:pl-6 text-black bg-opacity-30 rad-30 pt-7 pl-7 bg-customcream outline-none mt-4' ></textarea>
                        <button type='submit' class="max-sm:text-base worksans mt-10 max-sm:mt-5 font-semibold text-xl rounded-md before:ease relative py-4 px-10 max-sm:px-6 max-sm:py-3 overflow-hidden border-4 border-black text-black transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 hover:text-white hover:before:h-64 hover:before:-translate-y-32">
                            <span class="relative z-10">Send Message</span>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Form
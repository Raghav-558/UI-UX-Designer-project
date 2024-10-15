import React from 'react'

const Form = () => {
    return (
        <div className=''>
            <div className='max-w-[736px] mx-auto mt-40 px-3 mb-40'>
                <div>
                    <h2 className='text-fs-4xl eczar font-semibold leading-[80px]'>Let’s work together</h2>
                    <form action="">
                        <div className='gap-4 flex mt-10'>
                            <input type="text" id='name' className='py-7 text-black bg-opacity-30 rad-30 pl-7 font-semibold text-fs-sm work-sans  bg-customcream w-[360px] outline-none' placeholder='First name'/>
                            <input type="text" id='name' className='py-7 text-black bg-opacity-30 rad-30 pl-7 font-semibold text-fs-sm work-sans  bg-customcream w-[360px] outline-none' placeholder='Last name'/>
                        </div>
                        <div className='gap-4 flex mt-8'>
                            <input type="subject" id='subject' className='py-7 text-black bg-opacity-30 rad-30 font-semibold text-fs-sm work-sans  pl-7 bg-customcream w-[265px] outline-none' placeholder='Subject' />
                            <input type="email" id='email' className='py-7 text-black bg-opacity-30 rad-30 font-semibold text-fs-sm work-sans  pl-7 bg-customcream w-[455px] outline-none' placeholder='Email' />
                        </div>
                        <textarea name="message" id="message" placeholder='Your message' className=' font-semibold text-fs-sm work-sans w-full h-[211px] text-black bg-opacity-30 rad-30 pt-7 pl-7 bg-customcream outline-none mt-8' ></textarea>
                        <button type='submit' className='py-4 px-10 font-semibold text-fs-sm work-sans border-4 border-black hover:bg-black hover:text-white rounded-md mt-10 '>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
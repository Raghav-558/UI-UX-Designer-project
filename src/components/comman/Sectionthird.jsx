import React from 'react'
import Image1 from '../assets/images/little-bit-about-me-img.webp'

const Sectionthird = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-[1140px] mx-auto px-3 '>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-full lg:w-1/2 px-3'>
                        <div className='pt-14'>
                            <h2 className='eczar text-fs-2xl font-semibold text-white pb-8 max-lg:text-center'>A Little Bit About Me</h2>
                            <p className='font-normal text-xl leading-7 text-white work-sans max-lg:text-center'>Neque lectus elit massa aenean turpis quam aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum, scelerisque proin consequat tristique tortor, amet nullam. Eu purus blandit luctus faucibus justo venenatis a. </p>
                            <div className='max-lg:flex max-lg:justify-center'>
                                <button className='text-white border-4 border-white hover:text-black hover:bg-white transition-all duration-300 btn-2-pd rounded-md work-sans font-semibold text-fs-sm mt-10 '>Contact Me</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-3 max-lg:mt-5'>
                        <img src={Image1} alt="" className=' object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionthird
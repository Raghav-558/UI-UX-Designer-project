import React from 'react'
import Image1 from '../assets/images/little-bit-about-me-img.webp'

const Alittlebit = () => {
    return (
        <div id='about' className='bg-black'>
            <div className='max-w-[1140px] mx-auto px-5'>
                <div className='flex flex-wrap flex-row -mx-3 items-center'>
                    <div className='w-full lg:w-1/2 px-3'>
                        <div className='max-lg:pt-10 '>
                            <h2 className='eczar text-fs-2xl font-semibold text-white max-sm:text-3xl'>A Little Bit About Me</h2>
                            <p className='font-normal text-xl leading-7 text-white worksans max-sm:text-base max-sm:leading-6 pt-2'>Neque lectus elit massa aenean turpis quam aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum, scelerisque proin consequat tristique tortor, amet nullam. Eu purus blandit luctus faucibus justo venenatis a. </p>
                            <button className="worksans mt-5 max-sm:mt-5 max-lg:mt-8 font-semibold text-xl max-sm:text-base rounded-md before:ease relative py-3 px-14 max-sm:px-6 max-sm:py-3 overflow-hidden border-4 border-white text-white transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-500 hover:text-black hover:before:h-64 hover:before:-translate-y-32">
                                <span className="relative z-10">Contact Me</span>
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-3 max-lg:pt-10'>
                        <div className='max-lg:flex max-lg:justify-center'>
                            <img src={Image1} alt="" className=' object-cover max-lg:w-[500px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alittlebit
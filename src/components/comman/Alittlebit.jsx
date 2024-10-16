import React from 'react'
import Image1 from '../assets/images/little-bit-about-me-img.webp'

const Alittlebit = () => {
    return (
        <div className='bg-black'>
            <div className='max-w-[1140px] mx-auto px-3 '>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-full lg:w-1/2 px-3'>
                        <div className='pt-14 max-sm:pt-10'>
                            <h2 className='eczar text-fs-2xl font-semibold text-white pb-8 max-sm:pb-4 max-lg:text-center max-sm:text-3xl'>A Little Bit About Me</h2>
                            <p className='font-normal text-xl leading-7 text-white worksans max-lg:text-center max-sm:text-base'>Neque lectus elit massa aenean turpis quam aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum, scelerisque proin consequat tristique tortor, amet nullam. Eu purus blandit luctus faucibus justo venenatis a. </p>
                            <div className='max-lg:flex max-lg:justify-center'>
                                <button class="worksans mt-10 max-sm:mt-6 font-semibold text-xl max-sm:text-base rounded-md before:ease relative py-4 px-14 max-sm:px-6 max-sm:py-3 overflow-hidden border-4 border-white text-white transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-500 hover:text-black hover:before:h-64 hover:before:-translate-y-32">
                                    <span class="relative z-10">Contact Me</span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 px-3 max-lg:pt-8'>
                        <img src={Image1} alt="" className=' object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alittlebit
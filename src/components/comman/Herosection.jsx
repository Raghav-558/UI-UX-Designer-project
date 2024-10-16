import React from 'react'
import Heroimage from '../assets/images/chiranjit-img.webp'

const Herosection = () => {
    return (
        <div className='flex items-center flex-col'>
            <div className='container max-w-[1140px] px-3 mx-auto'>

            </div>
            <div className='container max-w-[1140px] px-3 mx-auto mt-12 max-lg:mb-20 max-md:mb-10 mb-28'>
                <div className='flex flex-wrap flex-row -mx-3 justify-between items-center'>
                    <div className='w-full lg:w-6/12 px-3'>
                        <div>
                            <button className='px-6 py-3 bg-black text-white rounded-[10px] text-2xl worksans max-md:text-xl max-sm:text-base'>👋 Hello All</button>
                            <h2 className='text-fs-4xl text-customBlack font-semibold eczar pt-6 leading-[80px] max-lg:text-fs-3xl max-md:text-5xl'>
                                I’m Chiranjit H,
                                A UI/UX Designer
                                and Developer
                            </h2>
                            <div className='flex mt-8 max-sm:mt-5 items-center gap-4 worksans max-sm:flex-col max-sm:gap-3'>
                                <button class="max-sm:text-base worksans font-semibold text-xl rounded-md before:ease relative py-4 px-10 max-sm:px-7 max-sm:py-3 overflow-hidden border-4 border-black text-white bg-black transition-all duration-500 before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-500 hover:text-black hover:before:h-64 hover:before:-translate-y-32">
                                    <span class="relative z-10">View My Work</span>
                                </button>
                                <button class="max-sm:text-base worksans font-semibold text-xl rounded-md before:ease relative py-4 px-14 max-sm:px-9 max-sm:py-3 overflow-hidden border-4 border-black text-black transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-500 hover:text-white hover:before:h-64 hover:before:-translate-y-32">
                                    <span class="relative z-10">Contact Me</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-3 max-lg:mt-5'>
                        <div>
                            <img src={Heroimage} alt="hero-image" className='rounded-[30px] w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
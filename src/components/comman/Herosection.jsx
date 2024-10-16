import React from 'react'
import Heroimage from '../assets/images/chiranjit-img.webp'

const Herosection = () => {
    return (
        <div className='flex items-center flex-col'>
            <div className='container max-w-[1140px] px-3 mx-auto'>

            </div>
            <div className='container max-w-[1140px] px-3 mx-auto mt-12 mb-124'>
                <div className='flex flex-wrap flex-row -mx-3 justify-between items-center'>
                    <div className='w-full lg:w-6/12 px-3'>
                        <div>
                            <button className='px-6 py-3 bg-black text-white rounded-[10px] text-fs-md worksans'>👋 Hello All</button>
                            <h2 className='text-fs-4xl text-customBlack font-semibold eczar pt-6 leading-[80px]'>
                                I’m Chiranjit H,
                                A UI/UX Designer
                                and Developer
                            </h2>
                            <div className='flex mt-10 items-center gap-4 worksans max-md:flex-col max-md:gap-5'>
                                <button className='bg-black btn-1-pd rounded-md border-4 border-black hover:bg-white group/icon text-white text-fs-sm font-semibold whitespace-nowrap flex items-center gap-3 hover:text-black transition-all duration-300' >
                                    View My Work
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className='group-hover/icon:fill-black transition-all duration-300' fill-rule="evenodd" clip-rule="evenodd" d="M10.7929 15.7071C10.4024 15.3166 10.4024 14.6834 10.7929 14.2929L13.0858 12L10.7929 9.70711C10.4024 9.31658 10.4024 8.68342 10.7929 8.29289C11.1834 7.90237 11.8166 7.90237 12.2071 8.29289L14.9229 11.0087C15.4704 11.5562 15.4704 12.4438 14.9229 12.9913L12.2071 15.7071C11.8166 16.0976 11.1834 16.0976 10.7929 15.7071ZM7.75007 2.38782C9.04878 2.0992 10.6243 2 12.5 2C14.3757 2 15.9512 2.0992 17.2499 2.38782C18.56 2.67897 19.6488 3.176 20.4864 4.01358C21.324 4.85116 21.821 5.94002 22.1122 7.25007C22.4008 8.54878 22.5 10.1243 22.5 12C22.5 13.8757 22.4008 15.4512 22.1122 16.7499C21.821 18.06 21.324 19.1488 20.4864 19.9864C19.6488 20.824 18.56 21.321 17.2499 21.6122C15.9512 21.9008 14.3757 22 12.5 22C10.6243 22 9.04878 21.9008 7.75007 21.6122C6.44002 21.321 5.35116 20.824 4.51358 19.9864C3.676 19.1488 3.17897 18.06 2.88782 16.7499C2.5992 15.4512 2.5 13.8757 2.5 12C2.5 10.1243 2.5992 8.54878 2.88782 7.25007C3.17897 5.94002 3.676 4.85116 4.51358 4.01358C5.35116 3.176 6.44002 2.67897 7.75007 2.38782Z" fill="#F3F2FF" />
                                    </svg>
                                </button>
                                <button class="worksans font-semibold text-xl rounded-md before:ease relative py-4 px-14 overflow-hidden border-4 border-black text-black transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-black before:duration-300 hover:text-white hover:before:h-64 hover:before:-translate-y-32">
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
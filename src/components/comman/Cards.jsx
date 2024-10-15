import React from 'react'
import Image1 from '../assets/images/sheepify-img.webp'
import Image2 from '../assets/images/interior-design-img.webp'
import Image3 from '../assets/images/ui-ux-design-img.webp'

const Cards = () => {
  return (
    <div className=' bg-black'>
      <div className='max-w-[1140px] mx-auto px-3 pt-16 pb-16'>
        <div className='text-left flex items-center gap-16 max-md:flex-col max-md:gap-5'>
          <h2 className='eczar font-semibold text-fs-2xl text-white'>Featured Work</h2>
          <button className='whitespace-nowrap text-fs-sm font-semibold work-sans text-white border-4 border-white btn-3-pd hover:bg-white hover:text-black rounded-md transition-all duration-300'>View more on Behance </button>
        </div>
        <div className='flex flex-wrap flex-row -mx-3 pb-30 pt-10'>
          <div className='w-full md:w-1/2 lg:w-1/3 px-3'>
            <a href="#"> <div className='bg-white rounded-xl p-2 hover:scale-[1.02] transition-all duration-300'>
              <img src={Image1} alt="sheepify" className='rounded-xl w-full' />
              <div className='p-3'>
                <h3 className='work-sans font-semibold text-fs-xl'>Sheepify States</h3>
                <p className='pt-2 font-medium text-fs-md work-sans'>Live View</p>
              </div>
            </div>
            </a>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 px-3 max-md:mt-5'>
            <a href="#"> <div className='bg-white rounded-xl p-2 hover:scale-[1.02] transition-all duration-300'>
              <img src={Image2} alt="interior" className='rounded-xl w-full' />
              <div className='p-3'>
                <h3 className='work-sans font-semibold text-fs-xl'>Interior Design</h3>
                <p className='pt-2 font-medium text-fs-md work-sans'>Live View</p>
              </div>
            </div>
            </a>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 px-3 max-lg:mt-5'>
            <a href="#"> <div className='bg-white rounded-xl p-2 hover:scale-[1.02] transition-all duration-300'>
              <img src={Image3} alt="uiux" className='rounded-xl w-full' />
              <div className='p-3'>
                <h3 className='work-sans font-semibold text-fs-xl'>IOS UI/UX Design</h3>
                <p className='pt-2 font-medium text-fs-md work-sans'>Live View</p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
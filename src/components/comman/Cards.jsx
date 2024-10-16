import React from 'react'
import Image1 from '../assets/images/sheepify-img.webp'
import Image2 from '../assets/images/interior-design-img.webp'
import Image3 from '../assets/images/ui-ux-design-img.webp'

const Cards = () => {
  const CARDS = [
    {
      img: Image1,
      title: "Sheepify States",
      para: "Live View",
    },
    {
      img: Image2,
      title: "Interiors Design",
      para: "Live View",
    },
    {
      img: Image3,
      title: "IOS UI/UX Design",
      para: "Live View",
    },
    {
      img: Image1,
      title: "Sheepify States",
      para: "Live View",
    },
  ];
  return (
    <div className=' bg-black'>
      <div className='max-w-[1140px] mx-auto px-3 pt-16 max-md:pt-10 pb-16 max-md:pb-10'>
        <div className='text-left flex items-center gap-16 max-sm:flex-col max-sm:gap-3'>
          <h2 className='eczar font-semibold text-fs-2xl max-md:text-3xl text-white'>Featured Work</h2>
          <button class="worksans font-semibold text-xl max-md:text-base max-sm:px-4 max-sm:py-3  rounded-md before:ease relative py-4 px-6 overflow-hidden border-4 border-white text-white transition-all duration-500 before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-26 before:rotate-45 before:bg-white before:duration-500 hover:text-black hover:before:h-64 hover:before:-translate-y-32">
            <span class="relative z-10">View more on Behance</span>
          </button>
        </div>
        <div className='flex flex-wrap flex-row -mx-3 pb-30 pt-10 max-sm:pt-6'>
          {CARDS.map((obj) => (
            <div className='w-full sm:w-1/2  md:w-1/3 lg:w-1/4 px-3'>
              <a href="#"> <div className='bg-white rounded-xl p-2 hover:scale-[1.02] transition-all duration-300 mb-5'>
                <img src={obj.img} alt="sheepify" className='rounded-xl w-full' />
                <div className='p-3'>
                  <h3 className='worksans font-semibold text-2xl max-sm:text-xl'>{obj.title}</h3>
                  <p className='pt-2 font-medium text-xl worksans max-sm:text-base'>{obj.para}</p>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
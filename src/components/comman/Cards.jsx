import React, { useState } from 'react';
import Image1 from '../assets/images/sheepify-img.webp';
import Image2 from '../assets/images/interior-design-img.webp';
import Image3 from '../assets/images/ui-ux-design-img.webp';

const Cards = () => {
  const CARDS = [
    {
      img: Image1,
      title: "Sheepify States"
    },
    {
      img: Image2,
      title: "Interiors Design"
    },
    {
      img: Image3,
      title: "IOS UI/UX Design"
    },
    {
      img: Image1,
      title: "Sheepify States"
    },
    {
      img: Image2,
      title: "Interiors Design"
    },
    {
      img: Image3,
      title: "IOS UI/UX Design"
    },
    {
      img: Image1,
      title: "Sheepify States"
    },
    {
      img: Image2,
      title: "Interiors Design"
    },
    {
      img: Image3,
      title: "IOS UI/UX Design"
    },
  ];
  const [show, setShow] = useState(3)
  const addCards = () => {
    if (show < CARDS.length) {
      setShow(show + 3);
    }
  }
  const lessCards = () => {
    if (show > 3) {
      setShow(show - 3)
    }
  };

  return (
    <div id='work' className='bg-black'>
      <div className='max-w-[1140px] mx-auto px-5 pt-16 max-md:pt-10 pb-16 max-md:pb-10'>
        <div className='text-left flex items-center gap-16 max-sm:flex-col max-sm:gap-3'>
          <h2 className='eczar font-semibold text-fs-2xl max-md:text-3xl text-white'>Featured Work</h2>
          <div className="worksans font-semibold text-xl max-md:text-base max-sm:px-4 max-sm:py-3 rounded-md max-sm:rounded-sm py-4 px-6 border-4 border-white text-white">
            <span className="relative z-10">View more on Behance</span>
          </div>
        </div>
        <div className='flex flex-wrap flex-row -mx-3 pt-14 max-sm:pt-6 justify-center'>
          {CARDS.slice(0, show).map((obj, index) => (
            <div key={index} className='w-full md:w-1/2 lg:w-1/3 px-3'>
              <a href="#">
                <div className='bg-white rounded-md p-2.5 mb-6 group'>
                  <div className=''>
                    <img src={obj.img} alt={obj.title} className='rounded-sm transition-all duration-300 group-hover:scale-[1.02] w-full ' />
                    <div className='p-3'>
                      <h3 className='worksans font-semibold text-2xl max-sm:text-xl'>{obj.title}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center gap-3'>
          <button onClick={addCards} className="worksans font-semibold text-xl max-sm:text-base rounded-md before:ease relative py-3 px-7 max-sm:px-4 max-sm:py-3 overflow-hidden border-4 border-white text-white transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-500 hover:text-black hover:before:h-64 hover:before:-translate-y-32">
            <span className="relative z-10">Show more...</span>
          </button>
          {show > 3 && (
            <button onClick={lessCards} className="worksans font-semibold text-xl max-sm:text-base rounded-md before:ease relative py-3 px-7 max-sm:px-4 max-sm:py-3 overflow-hidden border-4 border-white text-white transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-500 hover:text-black hover:before:h-64 hover:before:-translate-y-32">
              <span className="relative z-10">Show less...</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;

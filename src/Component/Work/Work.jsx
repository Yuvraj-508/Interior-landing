import React from 'react';
import './Work.css'
import img1 from '../../assets/heroI/w1.jpg'
import img6 from '../../assets/heroI/w6.avif';
import img5 from '../../assets/heroI/w5.jpg'
import img2 from '../../assets/heroI/w2.jpg'
import img7 from '../../assets/heroI/w7.avif'
import img8 from '../../assets/heroI/w8.avif'
import ScrollFadeIn from '../Scroll';


function Work() {
  return (
    <ScrollFadeIn>
    <div className='work w-full px-[4%] md:px-[8%] lg:px-[12%] mt-15 text-center flex flex-col gap-18'>
      <div className="w-full flex flex-col gap-3 items-center   ">
        <h1 className='text-[54px] md:max-w-[45%] leading-15 text-center'>ELGANCE REDEFINED</h1>
        <hr className='w-[20%] ' />
        <p className='text-[20px] text-center lg:max-w-[40%] leading-6 mt-5 text-gray-600'>We are a luxury interior design studio, dedicated to transforming spaces into extraordinary, awe-inspiring environments.</p>
      </div>
      <div className="flex flex-col w-full gap-20">
        <div className="mImg relative h-[380px] lg:h-[500px]">
        <img src={img2} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex w-full gap-6">
  <div className="relative w-[600px] h-[250px] lg:h-[300px] overflow-hidden wImg">
    <img src={img5} alt="" className="object-cover w-full h-full" />
  </div>
  <div className="relative w-[600px] h-[250px] lg:h-[300px] overflow-hidden wImg">
    <img src={img6} alt="" className="object-cover w-full h-full" />
  </div>
</div>

      </div>
      <div className="relative btn ">
        {/* <hr className='absolute -z-1 top-8 w-full' /> */}
        <button className=' btnn text-[24px] bg-gray-700 px-5 py-3 rounded-2xl  text-[#fff] font-medium  transition '>
            Expore More
        </button>
      </div>
    </div>
    </ScrollFadeIn>
  )
}

export default Work

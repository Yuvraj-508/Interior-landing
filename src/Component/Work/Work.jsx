import React from 'react';
import './Work.css'
import img1 from '../../assets/heroI/w1.jpg'
import img6 from '../../assets/heroI/w6.avif';
import img5 from '../../assets/heroI/w5.jpg'
import img2 from '../../assets/heroI/w2.jpg'
import img7 from '../../assets/heroI/w7.avif'
import img8 from '../../assets/heroI/w8.avif'


function Work() {
  return (
    <div className='work w-full px-[12%] mt-15 text-center flex flex-col gap-18'>
      <div className="w-full flex flex-col gap-3 items-center   ">
        <h1 className='text-[54px] max-w-[25%] leading-15 text-center'>ELGANCE REDEFINED</h1>
        <hr className='w-[10%] ' />
        <p className='text-[20px] text-center max-w-[40%] leading-6 mt-5 text-gray-600'>We are a luxury interior design studio, dedicated to transforming spaces into extraordinary, awe-inspiring environments.</p>
      </div>
      <div className="flex flex-col w-full gap-20">
        <div className="mImg relative h-[500px]">
        <img src={img2} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex w-full gap-6">
  <div className="relative w-[600px] h-[300px] overflow-hidden wImg">
    <img src={img5} alt="" className="object-cover w-full h-full" />
  </div>
  <div className="relative w-[600px] h-[300px] overflow-hidden wImg">
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
  )
}

export default Work

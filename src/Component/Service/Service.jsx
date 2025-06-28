import React from 'react';
import Img from '../../assets/ser/dec.avif';
import Img2 from '../../assets/ser/dec1.avif';
import Img3 from '../../assets/Ab/aa3.avif';

function Service() {
  return (
    <div className='w-full px-[2%] sm:px-[4%] md:px-[8%] lg:px-[12%] mt-30'>
      <div className="flex flex-col gap-2 items-center md:items-start text-[#02312F]"> {/* Align content to the start */}
        <h1 className='text-[34px] md:[text-[24px] font-bold '>SERVICES</h1>
        <p className="md:max-w-[40%]  md:text-start text-center text-[28px] sm:text-[38px] md:text-[48px] dm">Get your dream home with expert help.</p>

        {/* Services Grid */}
        <div className="w-full flex items-center md:items-end justify-between gap-8 mt-8 flex-wrap">
          {/* Card 1 */}
          <div className="flex flex-col items-center md:w-[350px]">
            <div className="w-full h-[300px] md:h-[400px] ">
              <img src={Img} alt="" className='w-full h-full object-cover' />
            </div>
            <p className='text-[24px] font-semibold dm mt-5'>Home Decoration</p>
            <p className='text-[16px] text-center dm mt-3'>Efficient use of space is crucial in home interior design. Consider the layout of furniture.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center md:w-[350px]">
            <div className="w-full h-[300px] md:h-[500px]">
              <img src={Img2} alt="" className='w-full h-full object-cover' />
            </div>
            <p className='text-[24px] font-semibold dm mt-5'>Home Decoration</p>
            <p className='text-[16px] text-center dm mt-3'>Efficient use of space is crucial in home interior design. Consider the layout of furniture.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center md:w-[350px]">
            <div className="w-full md:h-[400px] h-[300px]">
              <img src={Img3} alt="" className='w-full h-full object-cover' />
            </div>
            <p className='text-[24px] font-semibold  dm mt-5'>Home Decoration</p>
            <p className='text-[16px]  text-center dm mt-3'>Efficient use of space is crucial in home interior design. Consider the layout of furniture.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;


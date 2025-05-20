import React from 'react';
import './Hero.css';
import {motion} from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';

function Hero() {
  return (
    <div className='hero w-full flex items-center justify-center px-[12%]'>
    <div className="flex flex-col gap-8 -translate-y-[20%] translate-x-[13%]">
      <motion.h1 
      className='text-white text-[96px]  max-w-[60%] leading-25 font-medium dm'>Crafting spaces feel like home</motion.h1>
      <div className="flex gap-18 ">
        <p className="text-white  font-medium text-[24px] max-w-[48%] dm ">We design interiors that reflect your lifestyle and values, ensuring they stand the test of time.</p>
        <button className="dm flex items-center gap-5 bg-emerald-900 text-white px-6 text-[24px]  rounded-full font-medium hover:bg-emerald-800 transition">
            Explore More 
            <SquareArrowOutUpRight/>
          </button>
      </div>
    </div>
    </div>
  )
}

export default Hero

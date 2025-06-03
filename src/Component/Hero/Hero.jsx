import React from 'react';
import './Hero.css';
import {motion} from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';

function Hero() {
  return (
    <div className="hero w-full h-[100vh] relative flex items-center justify-center px-[12%] bg-cover bg-center">
      <div className="flex flex-col gap-8 -translate-y-[20%] translate-x-[13%] z-10">
        <motion.h1 className="text-white text-[96px] max-w-[60%] leading-25 font-medium dm">
          Crafting spaces feel like home
        </motion.h1>
        <div className="flex gap-18">
          <p className="text-white font-medium text-[24px] max-w-[48%] dm">
            We design interiors that reflect your lifestyle and values, ensuring they stand the test of time.
          </p>
          <button className="dm flex items-center gap-5 bg-emerald-900 text-white px-6 text-[24px] rounded-full font-medium hover:bg-emerald-800 transition">
            Explore More
            <SquareArrowOutUpRight />
          </button>
        </div>
      </div>

      {/* STATS BOXES BELOW */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between gap-4 z-20">
        {/* Box 1 */}
        <div className=" dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white ">
          <h2 className="text-5xl dm font-medium">15+</h2>
          <hr  className='mt-2'/>
          <p className='mt-5 text-xl'>Years of creating spaces</p>
        </div>
        {/* Box 2 */}
        <div className="  dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white">
          <h2 className="text-5xl dm font-medium">90+</h2>
          <hr  className='mt-2'/>
          <p className='mt-5 text-xl'>Amazing projects brought to life</p>
        </div>
        {/* Box 3 */}
        <div className=" dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white">
          <h2 className="text-5xl dm font-medium">75+</h2>
          <hr  className='mt-2'/>
          <p className='mt-5 text-xl'>Happy clients, happy spaces</p>
        </div>
        {/* Box 4 */}
        <div className=" dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white">
          <h2 className="text-5xl dm font-medium">11</h2>
          <hr  className='mt-2'/>
          <p className='mt-5 text-xl'>Designs that earn awards</p>
        </div>
      </div>
    </div>
  );
}


export default Hero

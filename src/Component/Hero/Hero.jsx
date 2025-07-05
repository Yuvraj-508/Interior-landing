import React from 'react';
import './Hero.css';
import {motion} from 'framer-motion';
import { SquareArrowOutUpRight } from 'lucide-react';
import AnimatedCounter from '../AnimatedCounter';
import ScrollFadeIn from '../Scroll';


function Hero() {
  return (
    <div className="hero w-full  relative flex items-center justify-center px-[2%] sm:px-[4%] md:px-[8%] lg:px-[12%] bg-cover bg-center">
     <ScrollFadeIn> <div className=" mt-6 sm:mt-18 md:mt-0 flex flex-col sm:gap-8 gap-4 md:gap-8 items-center md:items-start md:-translate-y-[20%] md:translate-x-[13%] z-10">
        <motion.h1 className="text-white text-center md:text-start sm:text-[52px] text-[44px] lg:text-[92px] md:text-[80px] lg:max-w-[85%] md:max-w-[90%] lg:leading-22 leading-14 md:leading-20 xl:leading-25 xl:max-w-[65%] font-medium dm">
          Crafting spaces feel like home
        </motion.h1>
        <div className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-18">
          <p className="text-white font-medium text-center md:text-start sm:text-[20px] text-[16px] max-w-[85%] lg:text-[24px] md:text-[20px] md:max-w-[48%] dm">
            We design interiors that reflect your lifestyle and values, ensuring they stand the test of time.
          </p>
          <button className="dm flex items-center gap-5 bg-emerald-900 text-white px-6 py-3 lg:text-[24px] text-[20px] rounded-full font-medium hover:bg-emerald-800 transition">
            Explore More
            <SquareArrowOutUpRight  />
          </button>
        </div>
       
      </div>
      </ScrollFadeIn> 

      {/* STATS BOXES BELOW */}
    

<div className="absolute hidden lg:flex bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] justify-between gap-4 z-20">
  {/* Box 1 */}
  <div className="dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white">
      <AnimatedCounter end={15} />
    <hr className="mt-2" />
    <p className="mt-5 text-xl">Years of creating spaces</p>
  </div>

  {/* Box 2 */}
  <div className="dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white">
    <AnimatedCounter end={90} />
    <hr className="mt-2" />
    <p className="mt-5 text-xl">Amazing projects brought to life</p>
  </div>

  {/* Box 3 */}
  <div className="dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white">
    <AnimatedCounter end={75} />
    <hr className="mt-2" />
    <p className="mt-5 text-xl">Happy clients, happy spaces</p>
  </div>

  {/* Box 4 */}
  <div className="dm w-[300px] bg-white/5 backdrop-blur-3xl px-4 py-3 rounded-md text-white">
    <AnimatedCounter end={11} />
    <hr className="mt-2" />
    <p className="mt-5 text-xl">Designs that earn awards</p>
  </div>
</div>

    </div>
  );
}


export default Hero

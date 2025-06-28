import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import Img1 from "../../assets/Ab/aa4.avif";
import Img2 from "../../assets/Ab/aa.avif";
import Img3 from "../../assets/Ab/aa3.avif";

const testimonials = [
  {
    quote:
      'As a commercial developer, we have worked with numerous design firms over the years. NextSpace stands out for their innovative designs, and ability to meet deadlines.',
    name: 'John Doe',
    location: 'California',
    image: Img1,
  },
  {
    quote:
      'We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.',
    name: 'Jane Smith',
    location: 'New York',
    image: Img2,
  },
  {
    quote:
      'Working with NextSpace was an absolute pleasure. Their team truly listened to our needs and translated our vision into a stunning yet functional home.',
    name: 'Michael Lee',
    location: 'Texas',
    image: Img3,
  },
];

function Client() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const handleBack = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    console.log(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-30">
      <h1 className="text-[54px] font-normal text-[#02312F]">Client Stories</h1>

      <div className="w-full flex mt-8 overflow-hidden">
        {/* Left Section */}
        <div className="md:w-1/2 bg-[#02312F] flex flex-col items-center justify-center text-white py-10 px-10 relative  overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="md:max-w-[70%]  overflow-x-hidden"
            >
              <p className="text-[28px] leading-10 font-bold">"{testimonial.quote}"</p>
              <p className="text-[26px] font-bold mt-5">{testimonial.name}</p>
              <p className="text-[18px] font-light">{testimonial.location}</p>
              <div className="mt-6 flex gap-4 float-end">
                <button onClick={handleBack} className="cursor-pointer">
                  <ArrowDownLeft size={30} strokeWidth={1} />
                </button>
                <button onClick={handleNext} className="cursor-pointer">
                  <ArrowUpRight size={30} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Section */}
        <div className="hidden w-1/2 md:flex items-center justify-center h-[500px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={testimonial.image}
              src={testimonial.image}
              alt={testimonial.name}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-[100%] h-[500px] object-cover rounded shadow-lg absolute"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Client;

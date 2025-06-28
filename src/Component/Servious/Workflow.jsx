import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

import Img from '../../assets/ser/sr.avif';
import Img1 from '../../assets/ser/sr1.avif';
import Img2 from '../../assets/ser/sr2.avif';

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function WorkFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const steps = [
    {
      img: Img,
      step: '01',
      title: 'Initial Consultation',
      desc: 'We begin by sitting down with you to understand your vision, goals, and preferences. This is where we listen carefully to your ideas, discuss your needs, and explore what\'s possible.'
    },
    {
      img: Img1,
      step: '02',
      title: 'Concept Development',
      desc: 'Once we have a clear understanding of your goals, we move on to brainstorming and designing. We create initial sketches, layouts, and concepts tailored to your unique vision.'
    },
    {
      img: Img2,
      step: '03',
      title: 'Planning & Preparation',
      desc: 'With the concept approved, we focus on the practicalities. From detailed drawings and material selection to project timelines and budgets, we ensure every aspect is planned meticulously.'
    },
    {
      img: Img2,
      step: '04',
      title: 'Execution & Delivery',
      desc: 'This is the exciting part—bringing the plan to life! Whether its overseeing construction, managing installations, or delivering the final design, we turn your vision into reality.'
    }
  ];
  useEffect(() => {
    if (visibleSteps.size > 0) {
      const lowestVisibleStep = Math.min(...Array.from(visibleSteps));
      setActiveStep(lowestVisibleStep);
    }
  }, [visibleSteps]);

  const updateVisibleSteps = (index, isVisible) => {
  setVisibleSteps(prev => {
    const newSet = new Set(prev);
    if (isVisible) {
      newSet.add(index);
    } else {
      newSet.delete(index);
    }
    return newSet;
  });
};
  return (
    <div className="w-full flex mt-25 px-[2%] sm:px-[4%] md:px-[8%] lg:px-[12%]">
      {/* Left Side */}
      <div className="md:w-[59%] hidden md:flex flex-col gap-5 sticky top-20 h-fit">
        <p className="text-xl font-bold text-white rounded-xl px-3 py-1 w-fit bg-[#004643] flex items-center gap-1">
          <ClipboardList /> How We Work
        </p>
        <p className="text-4xl font-bold max-w-[75%]">
          Let's turn your big ideas into a masterpiece with a clear and fun process
        </p>
        <div className="flex gap-5 text-[#004643]">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`border px-6 py-4 dm rounded-xl text-xl flex items-center gap-2 transition-all duration-300 ${
                activeStep === index
                  ? 'bg-[#004643] text-white border-[#004643]'
                  : 'hover:bg-[#004643]/10'
              }`}
            >
              Step {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-[41%] w-full flex flex-col items-center justify-center gap-8">
        {steps.map((step, index) => {
          const ref = useRef(null);
          const controls = useAnimation();
          const inView = useInView(ref, { 
            threshold: 0.5, 
            margin: "-150px 0px -150px 0px"
          });
          useEffect(() => {
            if (inView) {
              controls.start('visible');  // Handle animation
            }
            updateVisibleSteps(index, inView);  // Handle active step tracking
          }, [inView, controls, index]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              // variants={fadeInUp}
              className="w-full flex flex-col  flex-wrap items-center md:gap-5 justify-center text-white bg-[#004643] px-2 py-4 relative overflow-hidden rounded-xl"
            >
              <div className="md:w-[550px] w-full  h-[350px] relative overflow-hidden rounded-3xl px-2">
                <img src={step.img} alt="" className="w-full rounded-3xl h-full" />
              </div>
              <div className="md:w-[535px]  w-full  absolute flex items-center gap-5 bg-white/15 backdrop-blur-xl sm:bottom-0 md:bottom-26 bottom-0 px-4 z-10">
                <p className="text-[16px] font-bold -translate-y-7">STEP</p>
                <p className="text-[76px] dm">{step.step}</p>
                <p className="text-[22px] font-bold dm -translate-y-5">
                  <hr className="md:w-[310px] mb-1" />
                  {step.title}
                </p>
              </div>
              <p className="mt-7 text-[20px] hidden md:w-[530px]  font-bold leading-6">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
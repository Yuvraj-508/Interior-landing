import React from "react";
import { motion } from "framer-motion";
import AboutP from "../../assets/Ab/ab1.avif";
import Img1 from "../../assets/Ab/aa.avif";
import Img2 from "../../assets/Ab/aa1.avif";
import Img3 from "../../assets/Ab/aa3.avif";
import Img4 from "../../assets/Ab/aa4.avif";
import Img5 from "../../assets/Ab/3.avif";
function About() {
  const testimonials = [
    { id: 1, image: Img1, className: "w-90 h-100" },
    { id: 2, image: Img2, className: "w-90 h-70" },
    { id: 3, image: Img3, className: "w-90 h-100" },
    { id: 4, image: Img4, className: "w-100 h-100" },
    { id: 5, image: Img5, className: "w-90 h-80" },
  ];
  

  const duplicated = [...testimonials, ...testimonials];
  return (
    <div className="about w-full flex  flex-col px-[2%] sm:px-[4%] md:px-[8%] lg:px-[12%] mt-10">
      <div className="w-full flex justify-center py-16">
        <div className="flex flex-col md:flex-row  w-full max-w-6xl items-center gap-14">
          {/* Left Image Section */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end ">
            <img
              src={AboutP}
              alt="About"
              className="sm:w-[450px] w-[350px] md:w-[350px] sm:h-[450px] md:h-[500px] md:rounded-tl-[30%] rounded-xl"
            />
          </div>

          {/* Right Content Section */}
          <div className="md:w-1/2 w-full items-center md:items-start flex flex-col gap-2">
            <h1 className="text-2xl text-gray-500 font-normal mb-4">Welcome</h1>
            <h1 className="text-3xl  font-bold mb-4">I'M LILLY JOHN </h1>
            <p className="hidden md:flex text-gray-600 text-[22px] max-w-[100%]   mb-6">
              As the founder of Vela, I’ve always believed that interior design
              is more than just creating beautiful spaces, its about crafting
              environments that inspire, comfort, and elevate the everyday
              experience.
            </p>
            <p className=" md:hidden text-gray-600 text-[22px] text-center  mb-6">
              As the founder of Vela, I’ve always believed that interior design
              is more than just creating beautiful spaces and elevate the everyday
              experience.
            </p>
            <div className="flex gap-8">
              <button className="bg-gray-200 text-black px-5 py-3 text-xl rounded-lg md:text-2xl">
                Contact Us
              </button>
              <button className=" bg-[#004F3B] text-white px-5 py-3 text-xl rounded-lg md:text-2xl">
                Explore Me
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden mt-3 ">
      <motion.div
          className="flex gap-5 w-max py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }} 
          >
          {duplicated.map((item, i) => (
            <div key={i} className="box  shrink-0">
              <img src={item.image} alt="" className={`${item.className}`} />
            </div>
          ))}  
          </motion.div>
      </div>
    </div>
  );
}

export default About;

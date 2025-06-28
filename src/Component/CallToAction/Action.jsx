import React from 'react'
import Img from "../../assets/ser/action.png";
function Action() {
  return (
    <div className=' action flex w-full mt-20 h-screen   gap-20 flex-col'>
      <div className="flex flex-col lg:flex-row  gap-10 justify-between items-center  w-full relative px-[8%] mt-25 text-white">
     <div className="lg:max-w-[90%]"> <h1 className='md:text-[64px] sm:text-[48px] text-[44px] leading-15 font-bold dm text-center lg::text-start '>Unlock Your Dream Home Today!</h1></div>
      <div className="lg:max-w-[60%] text-center lg:text-start flex flex-col gap-7 ">
      <h1 className='text-[22px] font-bold  leading-7'>We encourage clients to actively participate in discussions, share their ideas and feedback.</h1>
      <div className="">
        <button className='bg-[#004643] px-2 py-2 text-[24px] font-bold rounded-lg'>Get In Touch</button>
      </div  >
      </div>
    </div> 
    </div>
  )
}

export default Action

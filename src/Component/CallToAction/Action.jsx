import React from 'react'
import Img from "../../assets/ser/action.png";
function Action() {
  return (
    <div className=' action flex w-full mt-20 h-screen  gap-20 flex-col'>
      <div className="flex  justify-between items-center  w-full relative px-[8%] mt-25 text-white">
     <div className="max-w-[60%]"> <h1 className='text-[68px] font-bold dm max-w-[80%]'>Unlock Your Dream Home Today!</h1></div>
      <div className="max-w-[40%] flex flex-col gap-7 ">
      <h1 className='text-[22px] font-bold  leading-8'>We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.</h1>
      <div className="">
        <button className='bg-[#004643] px-2 py-2 text-[24px] font-bold rounded-lg'>Get In Touch</button>
      </div  >
      </div>
    </div> 
    </div>
  )
}

export default Action

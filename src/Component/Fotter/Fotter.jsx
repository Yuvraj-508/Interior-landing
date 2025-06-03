import React from 'react'
import {Instagram,Facebook,Twitter} from 'lucide-react'
function Fotter() {
  return (
    <div className="  relative bg-[#004643] text-white w-full flex justify-center items-center mt-30  px-[10%] overflow-hidden">
 
    <div className="w-full mt-10 mb-10">
      <hr />
      <div className="lg:mt-5 mt-2 flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between">
        <p className="text-[18px]">© 2025 All rights reserved.</p>
        <ul className="flex gap-8">
          <li>
            <Instagram stroke="#fff" />
          </li>
          <li>
            <Facebook stroke="#fff" />
          </li>
          <li>
            <Twitter stroke="#fff"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Fotter

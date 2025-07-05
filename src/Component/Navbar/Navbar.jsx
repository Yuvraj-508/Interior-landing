import { useContext, useEffect, useState } from 'react';
import { Menu , X} from 'lucide-react';
import { DataContext } from '../../Manager/context';

import Icon from "../../assets/Ab/icon.png"
import { Links, NavLink } from 'react-router';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const {visible,setVisible}=useContext(DataContext);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50); // Change threshold if needed
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className='w-full fixed  top-0 px-[4%] md:px-[8%] lg:px-[12%] mt-2 z-100 transition-all duration-300'>
      <nav
        className={`nav flex justify-between items-center relative py-3.5 px-5 rounded-4xl transition-all duration-300 bg-white/75 backdrop-blur-md shadow-md`}
      >
        <div className="logo font-medium text-[42px]  text-gray-800 flex items-center"><img src={Icon} alt="" className='w-15 h-16' />Interior</div>
        <div className="link hidden lg:flex">
          <ul className="flex gap-8 text-black font-medium text-[24px] cursor-pointer">
           <NavLink to="/"> Home</NavLink>
           <NavLink> Work</NavLink>
           <NavLink> About</NavLink>
           <NavLink to="/contact"> Contact</NavLink>
          </ul>
        </div>
        <div className="btn hidden lg:flex">
          <button className="bg-emerald-900 text-white px-5 text-[24px] py-3 rounded-full font-medium hover:bg-emerald-800 transition">
            Book Appointment
          </button>
        </div>

        {/* // mobile menu */}
        <div className="lg:hidden">
          <button className="text-gray-800 cursor-pointer">
            <Menu size={32} 
            onClick={()=>setVisible(prev=>!prev)}
              className={`cursor-pointer ${visible?"hidden":""}`} />
            <X
             size={32}
            onClick={()=>setVisible(prev=>!prev)}
            className={`cursor-pointer  ${visible?"":"hidden"}`}
            />
          </button>
        </div>

        {/* menu link mobile */}

        <div className={`mobile-menu fixed  top-22 h-fit right-0 bottom-0 rounded-4xl bg-white/70 shadow-lg p-5  transition inset-1  duration-50 ease-in-out ${visible ? "" : "hidden"}`}>
          <ul className="flex flex-col gap-4 text-black font-medium text-[24px]">
            <li  className='cursor-pointer' onClick={()=>setVisible(prev=>!prev)}>Home</li>
            <li className='cursor-pointer' onClick={()=>setVisible(prev=>!prev)}>Work</li>
            <li className='cursor-pointer' onClick={()=>setVisible(prev=>!prev)}>About</li>
            <li className='cursor-pointer' onClick={()=>setVisible(prev=>!prev)}>Contact</li>
          </ul>
          <button className="bg-emerald-900 text-white px-4 text-[18px] py-3 rounded-full font-medium hover:bg-emerald-800 transition mt-4">
            Book Appointment
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



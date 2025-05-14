import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change threshold if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full fixed top-0 px-[12%] mt-5 z-10 transition-all duration-300'>
      <nav
        className={`nav flex justify-between items-center py-3.5 px-5 rounded-4xl transition-all duration-300 bg-white/70 backdrop-blur-md shadow-md`}
      >
        <div className="logo font-medium text-5xl text-gray-800">Logo</div>
        <div className="link">
          <ul className="flex gap-8 text-black font-medium text-[24px]">
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="btn">
          <button className="bg-emerald-900 text-white px-5 text-[24px] py-3 rounded-full font-medium hover:bg-emerald-800 transition">
            Book Appointment
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



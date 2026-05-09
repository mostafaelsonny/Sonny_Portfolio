import React from 'react';

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="absolute sm:fixed sm:h-[50px] md:absolute md:h-[70px] top-0 right-0 left-0 flex items-center justify-between px-[30px] glass-header z-[999] max-[700px]:fixed max-[700px]:h-[50px]" data-aos="fade-down" data-aos-duration="2000">
      <div className="flex items-center max-[480px]:scale-90 max-[480px]:-ml-[30px]">
        <h2 className="text-[20px] md:text-2xl font-bold"><span style={{ color: '#72a1dea2' }}>Mostafa </span>Elsonny</h2>
      </div>

      <ul className="hidden md:flex justify-between w-[30%] px-[15px] py-[15px] rounded-[50px] glass-nav max-[700px]:hidden">
        <li className="list-none"><a style={{ color: 'white' }} href="#About" className="font-bold transition-all duration-300 mx-[10px] hover:text-shadow-[0_0_15px_black] text-white no-underline">About</a></li>
        <li className="list-none"><a href="#projects" className="font-bold transition-all duration-300 mx-[10px] hover:text-shadow-[0_0_15px_black] text-white no-underline">Projects</a></li>
        <li className="list-none"><a href="#skills" className="font-bold transition-all duration-300 mx-[10px] hover:text-shadow-[0_0_15px_black] text-white no-underline">Skills</a></li>
      </ul>

      <div className="hidden md:flex gap-[40px] max-[700px]:hidden">
        <a href="https://wa.me/201117024184" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#72a1de] rounded-full cursor-pointer transition-all duration-500 text-white hover:bg-[#72a1de] hover:text-black hover:shadow-[0_0_15px_#72a1de]">
          <i className="bx bxl-whatsapp"></i>
        </a>
        <a href="https://github.com/mostafaelsonny" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#72a1de] rounded-full cursor-pointer transition-all duration-500 text-white hover:bg-[#72a1de] hover:text-black hover:shadow-[0_0_15px_#72a1de]">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mostafa-elsonny-4115ba404" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[20px] w-[30px] h-[30px] border-2 border-[#72a1de] rounded-full cursor-pointer transition-all duration-500 text-white hover:bg-[#72a1de] hover:text-black hover:shadow-[0_0_15px_#72a1de]">
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>

      <div className="md:hidden text-[35px] cursor-pointer inline max-[700px]:inline" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
      </div>
    </header>
  );
}

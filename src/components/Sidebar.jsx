import React from 'react';
import clsx from 'clsx';

export default function Sidebar({ isOpen, toggleSidebar, hasToggled }) {
  return (
    <div className={clsx(
      "fixed right-0 top-0 z-[999] bg-[#000000b8] shadow-[0_0_25px_rgba(255,255,255,0.479)] backdrop-blur-[10px]",
      !hasToggled && "w-0 opacity-0 bottom-[70%] rounded-bl-[100%]",
      hasToggled && isOpen && "animate-[openSideBarAnimation_1.5s_forwards]",
      hasToggled && !isOpen && "animate-[closeSideBarAnimation_1.5s_forwards]"
    )}>
      <div className="text-[50px] text-gray-300 pl-[10px] cursor-pointer" onClick={toggleSidebar}>
        <i className="bx bx-x"></i>
      </div>
      <ul className="pl-[20px]">
        <li className="mb-[30px]"><a href="#" onClick={toggleSidebar} className="text-gray-300 text-[30px] font-[900] [text-shadow:0_0_15px_#4c4c4c] no-underline">Home</a></li>
        <li className="mb-[30px]"><a href="#About" onClick={toggleSidebar} className="text-gray-300 text-[30px] font-[900] [text-shadow:0_0_15px_#4c4c4c] no-underline">About</a></li>
        <li className="mb-[30px]"><a href="#projects" onClick={toggleSidebar} className="text-gray-300 text-[30px] font-[900] [text-shadow:0_0_15px_#4c4c4c] no-underline">Projects</a></li>
        <li className="mb-[30px]"><a href="#skills" onClick={toggleSidebar} className="text-gray-300 text-[30px] font-[900] [text-shadow:0_0_15px_#4c4c4c] no-underline">Skills</a></li>
      </ul>
    </div>
  );
}

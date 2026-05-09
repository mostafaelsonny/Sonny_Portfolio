import React from 'react';
import VideoPlayer from './VideoPlayer';
import { motion } from 'framer-motion';
import useScrollReveal, { revealVariants } from '../hooks/useScrollReveal';

export default function ProjectCard({ title, description, link, videoSrc, videoId }) {
  const [vidRef, vidControls] = useScrollReveal();
  const [infoRef, infoControls] = useScrollReveal();

  return (
    <div className="flex w-full h-[40%] max-[480px]:h-auto items-center gap-[10%] justify-center max-[700px]:flex-col max-[700px]:ml-0 max-[700px]:gap-[30px]">
      
      <motion.div 
        ref={vidRef}
        variants={revealVariants.autoBlur}
        initial="hidden"
        animate={vidControls}
        className="contents"
      >
        <VideoPlayer src={videoSrc} id={videoId} />
      </motion.div>

      <motion.div 
        ref={infoRef}
        variants={revealVariants.fadeinLeft}
        initial="hidden"
        animate={infoControls}
        className="flex flex-col items-start justify-center w-1/2 max-[700px]:w-full pl-[10%] max-[770px]:pl-[0%] max-[770px]:items-center max-[700px]:text-center"
      >
        <h1 className="w-[90%] text-[20px] max-[700px]:text-[22px] font-bold mt-0 mb-[15px] max-[700px]:w-full max-[700px]:max-w-full max-[700px]:whitespace-normal whitespace-nowrap">
          {title}
        </h1>
        <p className="w-[90%] max-w-[400px] min-w-[300px] max-[700px]:w-full max-[700px]:max-w-full max-[700px]:min-w-0 mb-[50px] max-[480px]:mb-[20px] mt-0 max-[700px]:text-[16px]">
          {description}
        </p>
        <a href={link} target="_blank" rel="noreferrer">
          <button className="text-white py-[15px] px-[35px] max-[700px]:py-[5px] max-[700px]:px-[10px] rounded-[10px] border border-[#72a1de81] bg-[#2200493d] shadow-[0_0_5px_#72a1de81] cursor-pointer transition-all duration-300 hover:opacity-80 hover:shadow-[0_0_15px_#72a1de81]">
            <i className="bx bx-link-external mr-2"></i> Website
          </button>
        </a>
      </motion.div>
    </div>
  );
}

import React from 'react';
import SkillsSlider from '../components/SkillsSlider';
import { motion } from 'framer-motion';
import useScrollReveal, { revealVariants } from '../hooks/useScrollReveal';

export default function Skills() {
  const [titleRef, titleControls] = useScrollReveal();
  const [boxRef, boxControls] = useScrollReveal();

  return (
    <section id="skills" className="flex flex-col items-center relative mt-[500px]">
      <motion.h1 
        ref={titleRef}
        variants={revealVariants.autoDisplay}
        initial="hidden"
        animate={titleControls}
        className="text-[40px] font-bold max-[480px]:text-[25px]"
      >
        My Skills 💪
      </motion.h1>
      
      <motion.div 
        ref={boxRef}
        variants={revealVariants.autoDisplay}
        initial="hidden"
        animate={boxControls}
        className="w-full h-[90vh] max-[480px]:h-[120vh] max-[480px]:mr-[30px] relative flex items-start justify-center mix-blend-lighten opacity-70"
      >
        <img className="w-[70%] mix-blend-difference" src="/images/digital brain (2).png" alt="" />
        
        <div className="absolute flex flex-col items-start top-[25%] left-[5%] max-w-[300px] max-[700px]:top-[15%] max-[700px]:left-[18%]">
          <h1 className="text-[50px] flex items-center gradient max-[700px]:mb-0 max-[700px]:mt-[70px]">
            Designer <i className="bx bx-laptop ml-2 text-white"></i>
          </h1>
          <p className="leading-[23px] text-gray-300">
            I have expertise in HTML, CSS, JavaScript, React and design tools like
            Figma and Adobe XD. My strength lies in blending aesthetics with
            functionality to create seamless user experiences.
          </p>
        </div>

        <div className="absolute flex flex-col items-start top-[25%] right-[5%] max-w-[300px] max-[700px]:top-[50%] max-[700px]:left-[18%] max-[700px]:right-auto">
          <h1 className="text-[50px] flex items-center gradient max-[700px]:mb-0">
            Coder <i className="bx bx-code-block ml-2 text-white"></i>
          </h1>
          <p className="leading-[23px] text-gray-300">
            I’m skilled in HTML, CSS, JavaScript, and frameworks like React
            and Node.js. I also have experience with database management.
          </p>
        </div>

        <SkillsSlider />
      </motion.div>
    </section>
  );
}

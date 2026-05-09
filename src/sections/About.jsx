import React from 'react';
import InfoCard from '../components/InfoCard';
import { motion } from 'framer-motion';
import useScrollReveal, { revealVariants } from '../hooks/useScrollReveal';

export default function About() {
  const [titleRef, titleControls] = useScrollReveal();

  return (
    <section id="About" className="flex flex-col items-center w-[80%] mt-[100px] mx-auto z-10 relative">
      <motion.h1 
        ref={titleRef}
        variants={revealVariants.autoDisplay}
        initial="hidden"
        animate={titleControls}
        className="text-[40px] font-bold max-[480px]:text-[25px]"
      >
        Hello, There👋
      </motion.h1>
      
      <div className="grid grid-cols-3 max-[1200px]:grid-cols-1 max-[700px]:grid-cols-1 gap-[20px] w-full mt-[30px] max-[480px]:flex max-[480px]:flex-col">
        
        <InfoCard 
          title="Hi there, I'm Mostafa Elsonny"
          description="With 2 years of experience, I have honed my skills in frontend dev, creating dynamic and responsive websites."
          imgSrc="/images/grid1.png"
        />

        <InfoCard 
          title="Tech Stack"
          description="I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications."
          imgSrc="/images/grid2.png"
        />

        <InfoCard 
          className="row-span-2 h-[83vh] max-[1200px]:col-span-2 max-[1200px]:h-[70vh]"
          h1Class="bottom-[21%] max-[1200px]:bottom-[25%]"
          pClass="bottom-[12%]"
          title="I’m very flexible with time zone communications & locations"
          description="I'm based in Italy, Bari and open to remote work worldwide."
          videoSrc="https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091531/glob_w81pfz.mp4"
          buttonText="Contact Me"
          buttonLink="#contact"
        />

        <InfoCard 
          className="col-span-2"
          h1Class="bottom-[35%]"
          pClass="max-w-[650px]"
          title="My Passion for Coding"
          description="I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills."
          imgSrc="/images/grid4.png"
        />

      </div>
    </section>
  );
}

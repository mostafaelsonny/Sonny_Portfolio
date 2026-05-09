import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import useScrollReveal, { revealVariants } from '../hooks/useScrollReveal';

export default function Contact() {
  const [titleRef, titleControls] = useScrollReveal();
  const [socialRef, socialControls] = useScrollReveal();

  return (
    <section id="contact" className="w-[80%] h-screen flex justify-center gap-[10%] items-center relative mx-auto max-[700px]:flex-col max-[700px]:mt-[100px] max-[700px]:mb-[50px] max-[480px]:scale-90 max-[480px]:h-[120vh]">
      <motion.h1 
        ref={titleRef}
        variants={revealVariants.autoDisplay}
        initial="hidden"
        animate={titleControls}
        className="absolute top-[10%] left-[40%] text-[40px] font-bold max-[480px]:top-[-30px] max-[480px]:left-[25%] max-[480px]:text-[25px]"
      >
        Let's talk😊
      </motion.h1>

      <motion.div 
        ref={socialRef}
        variants={revealVariants.autoBlur}
        initial="hidden"
        animate={socialControls}
        className="flex flex-col gap-[25px] max-[700px]:-ml-[90px]"
      >
        <a href="tel:+201117024184" target="_blank" rel="noreferrer" className="text-lightgray no-underline text-[20px] whitespace-nowrap flex items-center hover:text-white transition-colors">
          <i className="bx bxs-phone text-[#7668ff] text-[30px] mr-[10px]"></i> +201117024184
        </a>
        <a href="https://t.me/MoustafaElsonny" target="_blank" rel="noreferrer" className="text-lightgray no-underline text-[20px] whitespace-nowrap flex items-center hover:text-white transition-colors">
          <i className="bx bxl-telegram text-[#7668ff] text-[30px] mr-[10px]"></i> @MoustafaElsonny
        </a>
        <a href="https://www.linkedin.com/in/mostafa-elsonny-4115ba404" target="_blank" rel="noreferrer" className="text-lightgray no-underline text-[20px] whitespace-nowrap flex items-center hover:text-white transition-colors">
          <i className="bx bxl-linkedin-square text-[#7668ff] text-[30px] mr-[10px]"></i> mostafa-elsonny
        </a>
      </motion.div>

      <ContactForm />
    </section>
  );
}

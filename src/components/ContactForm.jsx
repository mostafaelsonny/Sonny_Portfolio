import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal, { revealVariants } from '../hooks/useScrollReveal';

export default function ContactForm() {
  const formRef = useRef(null);
  const [ref, controls] = useScrollReveal();

  const handleKeyDown = (e, nextInputId) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (nextInputId) {
        document.getElementById(nextInputId)?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    const phoneNumber = "201117024184";
    const finalMessage = `السلام عليكم،\nأنا: ${name}\nإيميلي: ${email}\nالرسالة: ${message}`;
    const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(finalMessage);
    window.open(url, '_blank').focus();
  };

  return (
    <motion.form 
      ref={(el) => {
        formRef.current = el;
        ref(el);
      }}
      variants={revealVariants.autoBlur}
      initial="hidden"
      animate={controls}
      className="flex flex-col gap-[5px] max-[700px]:w-full" 
      onSubmit={handleSubmit}
    >
      <p className="max-w-[400px] mt-[30px] mb-[5px] text-gray-300">Whether you're looking to build a new website...</p>

      <p className="text-gray-300">Full Name</p>
      <input
        id="userName"
        placeholder="Your Full name"
        type="text"
        required
        className="py-[7.5px] px-[30px] bg-[lightgray] w-[80%] h-[25px] border-none outline-none rounded-r-[10px] text-black"
        onKeyDown={(e) => handleKeyDown(e, 'userEmail')}
      />

      <p className="text-gray-300">Email Address</p>
      <input
        id="userEmail"
        placeholder="Your Email"
        type="email"
        required
        className="py-[7.5px] px-[30px] bg-[lightgray] w-[80%] h-[25px] border-none outline-none rounded-r-[10px] text-black"
        onKeyDown={(e) => handleKeyDown(e, 'userMessage')}
      />

      <p className="text-gray-300">Your Message</p>
      <textarea
        id="userMessage"
        placeholder="Share your thoughts..."
        required
        className="py-[7.5px] px-[30px] bg-[lightgray] w-[80%] h-[25px] min-h-[100px] border-none outline-none rounded-r-[10px] text-black"
      ></textarea>

      <button type="submit" className="mt-[30px] text-white py-[15px] px-[35px] rounded-[10px] border border-[#72a1de81] bg-[#2200493d] shadow-[0_0_5px_#72a1de81] cursor-pointer transition-all duration-300 hover:opacity-80 hover:shadow-[0_0_15px_#72a1de81] self-start">
        Send Message <i className="bx bx-mail-send ml-2"></i>
      </button>
    </motion.form>
  );
}

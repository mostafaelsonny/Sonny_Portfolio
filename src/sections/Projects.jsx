import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import useScrollReveal, { revealVariants } from '../hooks/useScrollReveal';

export default function Projects() {
  const [titleRef, titleControls] = useScrollReveal();

  const projects = [
    {
      title: <>Sonny Travel | <span className="gradient"> Global Booking </span>Platform</>,
      description: "A high-performance, cinematic travel platform designed to showcase 52 global destinations with a focus on immersive media and seamless user flow. The project emphasizes architectural scalability and extreme performance optimization, transforming a media-heavy concept into a lightning-fast reality.",
      link: "https://sonny-travel.vercel.app/",
      videoSrc: "https://res.cloudinary.com/dj86zkbtp/video/upload/v1778320430/project_5_qsm7po.webm",
      videoId: "projectVideo1"
    },
    {
      title: <>PharmaStream | <span className="gradient">Premium</span> E-Commerce</>,
      description: "Experience A high-performance digital pharmacy engineered for speed and elegance. Featuring a seamless 'Add to Cart' flow, personalized Wishlists, and real-time user feedback—all wrapped in a cinematic, fully responsive interface.",
      link: "https://sonny-pharma-stream-premium-e-comme.vercel.app/",
      videoSrc: "https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091519/project1_feb2f1.webm",
      videoId: "projectVideo1_2"
    },
    {
      title: <>Elsonny <span className="gradient">Automotive </span>Showroom</>,
      description: "A massive, cinematic automotive ecosystem featuring a fleet of 300+ premium vehicles across 10 global brands. Engineered with a custom 'Build Your Own Car' configurator, a dynamic events engine, and a high-performance gallery. This isn't just a website; it's a full-scale luxury dealership experience.",
      link: "https://elsonny-automotive-showroom.vercel.app/",
      videoSrc: "https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091530/project2_qfxx3q.webm",
      videoId: "projectVideo2"
    },
    {
      title: <>Triple <span className="gradient">Gym</span> Peak Performance Hub</>,
      description: "workout programs and elite trainer profiles to seamless membership management, Triple Gym delivers a high-energy, cinematic digital experience for athletes who settle for nothing but the best.",
      link: "https://triple-gym-peak-performance-hub.vercel.app/",
      videoSrc: "https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091533/project3_qcg5qs.webm",
      videoId: "projectVideo3"
    },
    {
      title: <>Streamix <span className="gradient">Netflix</span> Clone</>,
      description: <span className="text-[15px]">An immersive streaming experience that replicates the premium feel of Netflix. Built with a high-fidelity cinematic UI, featuring dynamic content sliders, an interactive 'My List' for favorites, and seamless video integration. Optimized for a smooth, lag-free browsing experience across all devices.</span>,
      link: "https://sonny-streamix-netflix-clone.vercel.app/",
      videoSrc: "https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091542/project4_hy1edn.webm",
      videoId: "projectVideo4"
    }
  ];

  return (
<section id="projects" className="flex flex-col items-center relative w-[90%] h-[450vh] gap-[13%] max-[700px]:gap-[150px] max-[700px]:h-auto mt-[200px] mb-[700px] max-[1200px]:mb-[200px] max-[1200px]:scale-[0.8] max-[700px]:scale-100 max-[700px]:mb-[100px] max-[480px]:mb-[100px] mx-auto">      <motion.h1 
        ref={titleRef}
        variants={revealVariants.autoDisplay}
        initial="hidden"
        animate={titleControls}
        className="text-[40px] font-bold max-[480px]:text-[30px] mb-[50px] max-[700px]:mb-[80px]"
      >
        My Projects 👨‍💻
      </motion.h1>
      
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </section>
  );
}

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function useScrollReveal(options = { threshold: 0.1 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView(options);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // This resets the animation when scrolling out
    }
  }, [controls, inView]);

  return [ref, controls];
}

export const revealVariants = {
  autoBlur: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 50, scale: 0.9 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, scale: 1, transition: { duration: 0.8 } }
  },
  autoDisplay: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: -100, scale: 0 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, scale: 1, transition: { duration: 0.8 } }
  },
  fadeinLeft: {
    hidden: { opacity: 0, filter: 'blur(10px)', x: -100, scale: 0.8 },
    visible: { opacity: 1, filter: 'blur(0px)', x: 0, scale: 1, transition: { duration: 0.8 } }
  }
};

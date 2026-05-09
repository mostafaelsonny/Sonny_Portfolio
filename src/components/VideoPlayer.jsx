import React, { useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

export default function VideoPlayer({ src, id }) {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore auto-play interruption errors
        });
      }
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div 
      ref={ref} 
      className="relative flex items-center justify-center w-1/2 min-w-[400px] max-[700px]:min-w-full mix-blend-exclusion cursor-pointer transition-all duration-500 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        id={id}
        loop
        muted
        playsInline
        className="object-cover w-full shadow-[0_0_10px_lightgray] rounded-[20px] transition-all duration-500 group-hover:shadow-[0_0_25px_rgb(255,255,255)] max-[700px]:w-[110%] "
        src={inView ? src : undefined}
      />
      <div className="hover-sign absolute flex items-center justify-center w-[30%] h-[100px] group-hover:hidden"></div>
    </div>
  );
}

import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function BackgroundMedia() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div className="fixed right-0 bottom-0 w-full h-full -z-10">
      <video
        ref={ref}
        className="w-full h-full object-cover mix-blend-overlay"
        autoPlay
        loop
        muted
        playsInline
        src={inView ? "https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091519/galaxy_wcizw1.mp4" : undefined}
      />
      <div className="absolute inset-0 bg-[#001f7c38]"></div>
    </div>
  );
}

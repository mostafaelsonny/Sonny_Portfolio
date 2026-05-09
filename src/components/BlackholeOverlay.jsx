import React from 'react';

export default function BlackholeOverlay() {
  return (
    <div className="absolute top-0 w-full flex justify-center -z-10 mix-blend-lighten max-[480px]:overflow-hidden" data-aos="fade-down" data-aos-duration="2000">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-[480px]:w-[140%] mt-[-23.5%] max-[1200px]:mt-[-20%] max-[700px]:mt-[-15%] max-[480px]:mt-[-27%]"
        src="https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091519/blackhole_igyvqr.mp4"
      />
    </div>
  );
}

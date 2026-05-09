import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function InfoCard({ 
  title, 
  description, 
  imgSrc, 
  videoSrc, 
  buttonText, 
  buttonLink, 
  className = "",
  h1Class = "",
  pClass = ""
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div className={`relative flex items-start justify-center h-[40vh] max-[480px]:min-h-[20rem] overflow-hidden border border-gray-500 bg-[#080020b7] rounded-[20px] transition-all duration-500 hover:shadow-[0_0_15px_rgb(211,211,211)] group ${className}`}>
      
      <h1 className={`absolute m-0 bottom-[40%] max-[1200px]:text-[20px] max-[480px]:bottom-[30%] max-[480px]:text-[15px] left-[5%] text-[25px] z-10 text-lightgray group-hover:text-white transition-colors duration-300 ${h1Class}`}>
        {title}
      </h1>
      
      <p className={`absolute bottom-[3%] left-[5%] z-10 max-w-[300px] text-gray-400 text-[13px] leading-[20px] ${pClass}`}>
        {description}
      </p>

      {imgSrc && (
        <img src={imgSrc} alt="" className="w-[80%] h-[50%] object-cover mt-[10%] mix-blend-normal" />
      )}

      {videoSrc && (
        <div ref={ref} className="w-[70%] h-[50%] mt-[10%] mix-blend-lighten max-[1200px]:h-[60%] max-[1200px]:mt-[5%] max-[700px]:w-full">
            <video
              src={inView ? videoSrc : undefined}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
        </div>
      )}

      {buttonText && buttonLink && (
        <a href={buttonLink}>
          <button className="absolute bottom-[1%] left-[5%] py-[10px] px-[25px] border border-gray-500 bg-[#0f1217] text-gray-400 rounded-[20px] shadow-[0_0_5px_lightgray] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_lightgray] hover:opacity-70">
            <i className="bx bx-send mr-2"></i> {buttonText}
          </button>
        </a>
      )}
    </div>
  );
}

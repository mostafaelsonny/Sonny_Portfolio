import React from 'react';

export default function SkillsSlider() {
  const logos = [
    "/images/10.png", "/images/6.png", "/images/11.png", "/images/12.png",
    "/images/1.png", "/images/8.png", "/images/5.png", "/images/7.png", "/images/9.png"
  ];
  const quantity = logos.length;

  return (
    <div className="absolute bottom-[5%] right-[20%] w-[60%] h-[100px] overflow-hidden mix-blend-difference opacity-70 group max-[480px]:bottom-0"
         style={{ maskImage: 'linear-gradient(to right, transparent, #000 10% 90%, transparent)' }}>
      <div 
        className="flex w-full relative" 
        style={{ 
          minWidth: `calc(100px * ${quantity})`,
          '--width': '100px',
          '--quantity': quantity
        }}
      >
        {logos.map((logo, idx) => (
          <div 
            key={idx} 
            className="w-[100px] h-[100px] absolute left-full transition-all duration-500 group-hover:[animation-play-state:paused] grayscale hover:grayscale-0"
            style={{
              animation: `autoRun 10s linear infinite`,
              animationDelay: `calc((10s / ${quantity}) * (${idx + 1} - 1) - 10s)`
            }}
          >
            <img src={logo} alt={`Skill ${idx}`} className="w-full max-[700px]:w-[70%]" />
          </div>
        ))}
      </div>
    </div>
  );
}

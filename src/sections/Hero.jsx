import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex w-full h-screen items-center justify-between max-[700px]:flex-col max-[480px]:scale-90">
      
      <div 
        data-aos="fade-right"
        data-aos-duration="1000"
        className="absolute left-[5%] autoBlur max-[700px]:bottom-[5%] max-[480px]:bottom-[15%]"
      >
        <div className="text-[#72a1de] py-[8px] px-[5px] rounded-[50px] border border-[#72a1de94] w-[240px] bg-[#2200493d] shadow-[0_0_5px_#72a1de84] text-center">
          <i className="bx bxl-sketch mr-2"></i>
          Front-end Developer
        </div>

        <h1 
          data-aos="fade-right" 
          data-aos-duration="3000"
          className="text-[60px] max-[1200px]:text-[40px] max-[480px]:text-[35px] max-w-[600px] max-[1200px]:max-w-[400px] font-bold leading-[70px] max-[1200px]:leading-[40px] mt-[40px] mb-[30px]"
        >
          Providing <span className="gradient">the best</span> Project <span className="gradient">Experience</span>
        </h1>

        <p className="max-w-[550px] max-[1200px]:max-w-[300px] leading-[25px] mb-[40px] text-[20px]">
          I'm a front-end developer with experience in Website, Mobile and Software development. Check out my projects and skills.
        </p>

        <a href="#contact">
          <button className="text-white py-[15px] px-[35px] rounded-[10px] border border-[#72a1de81] bg-[#2200493d] shadow-[0_0_5px_#72a1de81] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#72a1de81]">
            <i className="bx bx-send mr-2"></i> Contact Me
          </button>
        </a>
      </div>

      <div className="absolute right-[3%] max-[1200px]:right-0 max-[700px]:top-[5%] max-[700px]:h-[200px] max-[480px]:hidden">
        <video 
          className="h-[900px] max-[1200px]:h-[500px] max-[700px]:h-full mix-blend-lighten autoBlur"
          autoPlay 
          loop 
          muted 
          playsInline 
          src="https://res.cloudinary.com/dj86zkbtp/video/upload/v1777091538/hero-video_cpz7ol.mp4"
        ></video>
      </div>

      <div className="scroll-down max-[700px]:bottom-[50%] max-[480px]:bottom-[15%] max-[480px]:left-[60%]"></div>
    </section>
  );
}

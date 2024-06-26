import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="flex flex-col mt-32 md:mt-0 items-center justify-center h-[100vh] w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] 2xl:top-[-380px]  h-full w-full left-0 z-[01] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      
      <HeroContent />
    </div>
  );
};

export default Hero;

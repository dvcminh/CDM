import React from "react";

const Hero = () => {
  return (
    <div className="text-white  hero-section">
      <div className="max-w-[560px] max-lg:max-w-[480px] mt-[-96px] text-left flex flex-col justify-center w-full h-screen mr-auto lg:ml-32 ml-16 ">
        <p className=" font-bold py-2">Explore the Perfect Ride for You</p>
        <h1 className="font-bold lg:text-5xl md:text-4xl text-2xl lg:py-2">
          Discover a Wide Range of High-Quality Cars at CDMA
        </h1>

        <p className="text-md font-bold text-[#abbcab]">
          Here at CDMA, we offer a wide range of high-quality cars at affordable
          prices. We are committed to providing our customers with the best
          possible experience, from the moment they place their order to the day
          they receive their vehicle. 
        </p>
      </div>
    </div>
  );
};

export default Hero;

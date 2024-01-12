import React from "react";
import HeroImage from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around lg:mt-28 p-10 gap-5">
    <div className="text-slate-400 md:w-1/2 md:leading-7">
      <h1 className="text-7xl mb-5 textColor">
        Secure and Convenient Payment Web App
      </h1>
      <h2 className="hidden md:flex lg:flex lg:text-2xl mb-5">Welcome to Translink
      , where the future of payments begins! Join our early access list and stay in the loop on the latest developments in secure online transactions.</h2>
      <div></div>
      <button className='btn  px-4 py-2 rounded-xl hover:bg-amber-500 mt-2'>
        Join our waitlist
      </button>
    </div>
    <div className="moving lg:flex-shrink-0">
      <img src={HeroImage} alt="hero" />
    </div>
  </div>
  );
};

export default Hero;

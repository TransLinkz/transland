import React from "react";
import AboutImage from "../../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div >
        <div className="flex justify-center items-center mb-10">
        <h1 className="text-7xl textSmall textColor">ABOUT-US</h1>
        </div>
      
    <div className="flex flex-col lg:flex-row justify-around lg:mt-8 px-10 py-50 gap-5">
      
      <div>
        <img src={AboutImage} alt="" className=" imgAbout rounded-3xl" />
      </div>
      <div className="text-slate-400 md:w-1/2 md:leading-7">
        {" "}
        
        <h2 className="text-center text-4xl textSmall mb-12 textColor">
          FINANCIAL GOALS ARE OUR PRIORITY
        </h2>
        
        <h3 className="flex lg:flex lg:text-xl mb-12">
          Join our exclusive early access list for a sneak peek into the future
          of online payments! Be the first to experience a secure and convenient
          payment web app designed for seamless transactions.
        </h3>
        <h3 className="flex lg:flex lg:text-xl mb-12">
          Join our exclusive early access list for a sneak peek into the future
          of online payments! Be the first to experience a secure and convenient
          payment web app designed for seamless transactions.
        </h3>
      </div>
      </div>

    </div>
    // </div>
  );
};

export default About;

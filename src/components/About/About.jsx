import React from 'react'
import AboutImage from "../../assets/about.jpg"
import "./About.css"

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around lg:mt-28 p-10 gap-5">
      <div><img src={AboutImage} alt=""  className=" imgAbout rounded-3xl"/></div>
      <div className="text-white md:w-1/2 md:leading-7"> <h1 className="text-7xl textSmall mb-5 textColor">
      FINANCIAL GOALS ARE OUR PRIORITY
      </h1>

      <h2 className="flex lg:flex lg:text-2xl mb-5">Join our exclusive early access list for a sneak peek into the future
        of online payments! Be the first to experience a secure and convenient
        payment web app designed for seamless transactions.</h2>
      <h2 className="flex lg:flex lg:text-2xl mb-5">Join our exclusive early access list for a sneak peek into the future
        of online payments! Be the first to experience a secure and convenient
        payment web app designed for seamless transactions.</h2>


      
      </div> 
      </div>
  )
}

export default About
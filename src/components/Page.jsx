import React from "react";
import Logo from "../assets/logoo1.png";
import Hero from "./Hero/Hero";
import About from "./About/About";
import "./Page.css";
import Feature from "./Feature/Feature";
import Work from "./Work/Work";
import World from "./World/World";
import Behind from "./Behind/Behind";
import Footer from "./Footer/Footer";

const Page = () => {
  return (
    <div className="backgroundColor">
      <div className="flex justify-around items-center p-2 mt-0 bg-black rounded-br-2xl rounded-bl-2xl">
        <div>
          <img src={Logo} alt="logo" className="w-44 h-28  p-1 rounded-3xl" />
        </div>
        <div>
          <button className="btn  px-4 py-2 rounded-xl hover:bg-amber-500 mt-2">
            Join our waitlist
          </button>
        </div>
      </div>
      <div className="py-2 gap-5">
        <div className=" mb-8"><Hero /></div>
        <div className=" mb-20 bg-black p-10"><About /></div>
        <div className=" mb-8 mx-8"><Feature /></div>
        <div className=" mb-8 mx-8"><Work /></div>
        <div className=" mb-8 mx-8"><World /></div>
        <div className=" mb-8 mx-8"><Behind /></div>
        <div className=""><Footer /></div>
        
        
      </div>
    </div>
  );
};

export default Page;

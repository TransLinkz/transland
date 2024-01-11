import React from 'react';
import Logo from '../assets/logoo1.png';
import Hero from './Hero/Hero';
import About from './About/About';
import "./Page.css"

const Page = () => {
  return (
    <div className='backgroundColor'>
      <div className="flex justify-around items-center p-2 mt-0 bg-black rounded-br-2xl rounded-bl-2xl">
      <div>
        <img src={Logo} alt='logo' className='w-44 h-28  p-1 rounded-3xl' />
      </div>
      <div>
      <button className='btn  px-4 py-2 rounded-xl hover:bg-amber-500 mt-2'>
        Join our waitlist
      </button>
      </div>
      </div>
      <Hero />
      <About />
    </div>
  );
};

export default Page;

import React from 'react';

const Footer = () => {

  const googleFormLink = 'https://forms.gle/fBbRm1ibf1V15mVK7';
  return (
    <div className="mt-8 md:mt-16 lg:mt-28 text-slate-400 bg-black p-8">
      <div>
        <h2 className="text-lg md:text-xl lg:text-2xl my-3 md:my-5">What are you waiting for?</h2>
      </div>
      <div className="flex flex-col md:flex-row md:items-center lg:justify-between">
        <div className="md:w-1/2">
          <h2 className="text-sm md:text-base lg:text-lg">
            Want to transfer money fast in Africa? Let Translink help you achieve that.
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row md:gap-10">
        <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
          <button className='btn px-4 py-2 rounded-xl hover:bg-amber-500 mt-2'>
            Join our waitlist
          </button>
        </a>
          <button className="btn px-4 py-2 rounded-xl hover:bg-amber-500 mt-2 md:mt-0">
            View company's profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

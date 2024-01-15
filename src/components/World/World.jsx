import React from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import WorldImg from "../../assets/world.jpg";

const World = () => {
  const Data = [
    {
      title: "500",
      desc: " Subscribers",
    },
    {
      title: "400",
      desc: "Waitlist",
    },
    {
      title: "250",
      desc: "Testers",
    },
    {
      title: "200",
      desc: "Partners Joined",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const googleFormLink = 'https://forms.gle/fBbRm1ibf1V15mVK7';
  return (
    <div ref={ref} className="mt-10 lg:mt-40 py-10 px-5 lg:px-40 flex flex-col lg:flex-row items-center lg:justify-around gap-10 text-slate-400">
      <div>
        <div className=" mb-10 leading-7">
          <h2 className="text-3xl lg:text-5xl textSmall textColor mb-4">WE ARE ROUND THE WORLD</h2>
          <p className=" text-lg ">
          Uniting the World. Empowering seamless and secure global money transfers. Join us in breaking barriers and transforming financial accessibility.
          </p>
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
          <button className='btn px-4 py-2 rounded-xl hover:bg-amber-500 mt-2'>
            Join our waitlist
          </button>
        </a>
        </div>
        <div className="grid grid-cols-2  gap-4">
          {Data.map((world) => (
            <div
              key={world.title}
              className="flex flex-col justify-center items-center back p-12 rounded-3xl"
            >
              <h2 className="text-5xl text-bold">
                {
                    inView && <CountUp end={parseInt(world.title)} duration={2} separator="," />
                }
        
        <span>+</span>
      </h2>
              <p className="text-xl">{world.desc}</p>
            </div>
          ))}

        </div>

      </div>
      <div className="lg:w-1/2 rounded-full">
        <img src={WorldImg} alt="worldimg" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default World;

import React from 'react';
import Gateway from '../../assets/gateway.png';
import Access from '../../assets/access.png';
import User from '../../assets/user.png';
import Create from '../../assets/create.png';

import "./Work.css"

const Work = () => {
  const Data = [
    {
      title: 'Create Account',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum corporis voluptatibus nihil? Facilis, sunt.',
      icon: Create,
    },
    {
      title: 'User Configuration',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum corporis voluptatibus nihil? Facilis, sunt.',
      icon: User,
    },
    {
      title: 'Enjoy Full Access',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum corporis voluptatibus nihil? Facilis, sunt.',
      icon: Access,
    },
  ];

  return (
    <div className="mt-10 lg:mt-40 py-10 px-5 lg:px-40 flex flex-col lg:flex-row items-center lg:justify-around gap-5">
      <div className="lg:w-1/2 moving">
        <img src={Gateway} alt="gateway" className="w-full h-auto" />
      </div>
      <div className="lg:w-1/2">
        <div className="leading-7 text-slate-100">
          <h2 className="text-3xl lg:text-5xl textSmall textColor mb-4">SIMPLIFY YOUR PAYMENT PROCESSES</h2>
          <h4 className="text-lg mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure eius autem beatae mollitia quasi, neque magni excepturi velit ullam sunt eos minima.</h4>
          <div>
            {Data.map((items) => (
              <div key={items.title} className="flex items-center gap-5 mb-5">
                <div className="p-3 lg:p-5 iconback rounded-full"><img src={items.icon} alt="icon" className="w-8 h-8 lg:w-12 lg:h-12" /></div>
                <div>
                  <h1 className="text-xl">{items.title}</h1>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

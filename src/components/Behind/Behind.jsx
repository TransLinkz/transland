import React from "react";
import Ibrahim from "../../assets/Ibrahim.jpg";
import Amos from "../../assets/Amos.jpg";
import Mohammed from "../../assets/Mohamed.jpg";
import Haleema from "../../assets/Haleema.jpg";

const Behind = () => {
  const Data = [
    {
      name: "IBRAHIM",
      title: "Co-founder/Frontend developer",
      img: Ibrahim,
    },
    {
      name: "MOHAMMED",
      title: "Co-founder/Data Analyst",
      img: Mohammed,
    },
    {
      name: "AMOS",
      title: "Co-founder/Backend developer",
      img: Amos,
    },
    {
      name: "HALEEMA",
      title: "Lawyer",
      img: Haleema,
    },
  ];
  return (
    <div className=" mt-28">
      <div className="flex justify-center items-center text-center mb-20"> <h1 className="text-3xl lg:text-5xl textSmall textColor mb-4 leading-7"> OUR TEAM</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">

{Data.map((behind) => (
  <div
    key={behind.name}
    className="bg-black text-slate-400 p-4 md:p-10 rounded-2xl"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
      <div className="md:w-1/3">
        <img src={behind.img} alt="team" className="w-full h-auto rounded-3xl" />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl">{behind.name}</h1>
        <p className="text-xs md:text-sm">{behind.title}</p>
      </div>
    </div>
  </div>
))}
</div>
    </div>
  );
};

export default Behind;

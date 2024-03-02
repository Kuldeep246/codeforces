import React from 'react';
 import { SlBadge } from "react-icons/sl";

const Card1 = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded-md hover:scale-110 transition-transform w-36 md:w-48 bg-[#eaecc6ee] cursor-pointer shadow-black shadow-lg" >
      <div className="px-6 py-4">
        <div className="font-bold flex text-xl mb-2">{title}  <SlBadge className='text-4xl pl-3' /></div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export { Card1 };


const Card2 = ({ title, description }) => {
  let ratingColorClass;
  let ratingTitle;

  if (description >= 2900) {
    ratingColorClass = "bg-[#D10000]";
    ratingTitle = "Legendary Grandmaster";
  } else if (description >= 2600) {
    ratingColorClass = "bg-[#FF0000]";
    ratingTitle = "International Grandmaster";
  } else if (description >= 2400) {
    ratingColorClass = "bg-red-500";
    ratingTitle = "Grandmaster";
  } else if (description >= 2300) {
    ratingColorClass = "bg-orange-500";
    ratingTitle = "International Master";
  } else if (description >= 2200) {
    ratingColorClass = "bg-orange-400";
    ratingTitle = "Master";
  } else if (description >= 1900) {
    ratingColorClass = "bg-purple-400";
    ratingTitle = "Candidate Master";
  } else if (description >= 1600) {
    ratingColorClass = "bg-[#6B66FF]";
    ratingTitle = "Expert";
  } else if (description >= 1400) {
    ratingColorClass = "bg-[#59D5E0]";
    ratingTitle = "Specialist";
  } else if (description >= 1200) {
    ratingColorClass = "bg-green-500";
    ratingTitle = "Pupil";
  } else {
    ratingColorClass = "bg-gray-400";
    ratingTitle = "Newbie";
  }

  return (
    <div className={`max-w-sm rounded-md hover:scale-110 transition-transform w-36 md:w-48 ${ratingColorClass} cursor-pointer shadow-black shadow-lg`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-800 text-base">{description}</p>
        <p className="text-gray-890 font-semibold text-base">{ratingTitle}</p>
      </div>
    </div>
  );
};

export { Card2 };

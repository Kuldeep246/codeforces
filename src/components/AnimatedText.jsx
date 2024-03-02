import React, { useState, useEffect } from 'react';
import { FaLink } from "react-icons/fa6";

import { handleState } from '../store/atoms';
import { useRecoilValue } from 'recoil';

const AnimatedText = () => {


  const text = useRecoilValue(handleState);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const animateText = (index) => {
      setDisplayedText(text.substring(0, index));

      if (index < text.length) {
        setTimeout(() => {
          animateText(index + 1);
        }, 200);
      }
    };

    animateText(0);
  }, [text]);

  return (
    <div className="animated-text flex justify-start hover:scale-110 transition-transform hover:text-gray-200 text-4xl font-semibold font-mono text-[#e8d4c2]">
      <FaLink className='text-blue-500 text-2xl' />
      <a href={`https://codeforces.com/profile/${text}`}  target="_blank" rel="noopener noreferrer" >
        {displayedText}
      </a>
      
    </div>


  );
};

export default AnimatedText;

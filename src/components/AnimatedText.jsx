import React, { useState, useEffect } from 'react';

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
    <div className="animated-text mt-8 text-4xl font-medium font-mono text-[#FFE3CA] ">
      {displayedText}
    </div>
  );
};

export default AnimatedText;

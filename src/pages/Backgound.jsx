
import React from 'react';
import codeforcesIcon from '../assets/codeforcesIcon.webp';

const Background = () => {
  console.log(codeforcesIcon);
  return (
    <div className='w-screen h-screen mx-auto my-auto flex  items-center justify-center' style={backgroundStyle}>
      <img src={codeforcesIcon} alt="Codeforces Icon" className="max-w-full max-h-full" style={imageStyle}  />
    </div>
  );
}
const backgroundStyle = {
  background: `url(${codeforcesIcon}) center/21% 40%  no-repeat fixed`,
  opacity: 0.5, 
};

const imageStyle = {
  visibility: 'hidden',
};


export default Background;

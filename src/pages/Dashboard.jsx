import React from 'react';
import Tags from '../components/charts/Tags';
import ProblemsRaiting from "../components/charts/ProblemsRaiting";
import Submission from "../components/charts/Submission";
import Languages from '../components/charts/Languages';
import RankandRaiting from '../components/charts/RankandRaiting';
import AnimatedText from '../components/AnimatedText';
import Unsolved from '../components/Unsolved';
import { DiGithubBadge } from "react-icons/di";

const Dashboard = () => {
  return (
    <div className='w-full  relative'>
      <div className="w-full  flex justify-center items-center bg-[#2a3f4b] h-48">
        <div className="w-1/3">
          <AnimatedText />
        </div>
        <div className='w-1/2'>
          <RankandRaiting />
        </div>

      </div>

      <div className='flex justify-center p-5 w-full max-w-screen-xl mx-auto space-x-3'>
        <Languages />
        <div className="divider lg:divider-horizontal"></div>
        <Submission />
      </div>
      <div className="divider"></div>

      <div className='flex p-8 justify-center w-full max-w-screen-xl mx-auto'>
        <Tags />
      </div>
      <div className="divider"></div>

      <div className='flex p-5 justify-center w-full max-w-screen-xl mx-auto'>
        <ProblemsRaiting />
      </div>
      <div className="divider"></div>
      <div className=' flex p-5 justify-center w-full max-w-screen-xl mx-auto'>
        <Unsolved />
      </div>
      <div className="divider"></div>
      <div className='bottom-10 flex items-center justify-center text-6xl'  >
        <a
          href='https://github.com/Kuldeep246/codeforces'
          className='flex items-center justify-center'
          target='_blank'
          rel='noopener noreferrer'
        >
          <DiGithubBadge />
          <span className='text-base'>Developed by Kuldeep</span>
        </a>

      </div>
    </div>
  );
};

export default Dashboard;

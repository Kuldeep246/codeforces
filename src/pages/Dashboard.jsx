import React from 'react';
import Tags from '../components/charts/Tags';
import ProblemsRaiting from "../components/charts/ProblemsRaiting";
import Submission from "../components/charts/Submission";
import Languages from '../components/charts/Languages';
import RankandRaiting from '../components/charts/RankandRaiting';
import { handleState } from '../store/atoms';
import { useRecoilValue } from 'recoil';
import AnimatedText from '../components/AnimatedText';

const Dashboard = () => {
  return (
    <div className='w-full z-10 relative'>
      <div className='w-full bg-[#001d3d] h-48'>
        <div className='w-full max-w-screen-xl mx-auto p-4'>
          <AnimatedText/>
        </div>
        <div className='top-0 right-8 absolute '>
          <RankandRaiting />
        </div>
      </div>

      <div className='flex justify-center p-5 w-full max-w-screen-xl mx-auto space-x-7'>
        <Languages />
        <div className="divider lg:divider-horizontal"></div>
        <Submission />
      </div>
      <div className="divider"></div>

      <div className='flex p-5 justify-center w-full max-w-screen-xl mx-auto'>
        <Tags />
      </div>
      <div className="divider"></div>

      <div className='flex p-5 justify-center w-full max-w-screen-xl mx-auto'>
        <ProblemsRaiting />
      </div>
    </div>
  );
};

export default Dashboard;

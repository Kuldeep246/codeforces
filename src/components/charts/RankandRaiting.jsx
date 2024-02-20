import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { handleState } from '../../store/atoms';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RankandRating = () => {
  const [maxRating, setMaxRating] = useState(Number.MIN_SAFE_INTEGER);
  const [minRank, setMinRank] = useState(Number.MAX_SAFE_INTEGER);
  const [loading, setLoading] = useState(true);
  const handle = useRecoilValue(handleState);


  useEffect(() => {
    const fetchHighestRatingData = async () => {
      try {
        console.log(handle);
        const response = await axios.get(`https://codeforces.com/api/user.rating?handle=${handle}`);
        const contests = response.data.result;

        let newMaxRating = Number.MIN_SAFE_INTEGER;
        let newMinRank = Number.MAX_SAFE_INTEGER;

        contests.forEach((contest) => {
          const currentRating = contest.newRating;
          newMaxRating = Math.max(newMaxRating, currentRating);

          const currentRank = contest.rank;
          newMinRank = Math.min(newMinRank, currentRank);
        });

        setMaxRating(newMaxRating);
        setMinRank(newMinRank);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data: ' + error.message, {
          position: 'bottom-right',
          autoClose: 4000,
        })
        setLoading(false);
      }
    };

    fetchHighestRatingData();
  }, [handle]);

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className='h-48 bg-[#001d3d] w-48 rounded-lg p-3'>
          <span className='font-sans-serif text-2xl font-semibold text-[#eaecc6ee]'>Highest Rating</span>
          <br />
          <div className='font-semibold text-[#eaecc6ee] '>{maxRating}</div>
          <span className='font-sans-serif font-semibold text-2xl text-[#eaecc6ee]'>Best Rank</span>
          <br />
          <div className='font-semibold text-[#eaecc6ee]'>{minRank}</div>
          <br />
        </div>
      )
      }
    </div>
  );
};

export default RankandRating;
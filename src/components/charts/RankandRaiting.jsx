import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { handleState } from '../../store/atoms';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { Card1, Card2 } from '../Card';

const RankandRating = () => {
  const [maxRating, setMaxRating] = useState(Number.MIN_SAFE_INTEGER);
  const [minRank, setMinRank] = useState(Number.MAX_SAFE_INTEGER);
  const [liveRating, setLiveRating] = useState(null);
  const [loading, setLoading] = useState(true);
  const userHandle = useRecoilValue(handleState);

  useEffect(() => {
    const fetchHighestRatingData = async () => {
      try {
        console.log(userHandle);
        const response = await axios.get(`https://codeforces.com/api/user.rating?handle=${userHandle}`);
        const contests = response.data.result;

        const x = contests.length;
        setLiveRating(contests[x - 1].newRating);

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
        const errorMessage = error.response ? error.response.data.comment : error.message;
        toast.error(`Error fetching data: ${errorMessage}`, {
          position: 'bottom-right',
          autoClose: 4000,
        });
        setLoading(false);
      }
    };

    fetchHighestRatingData();
  }, [userHandle]);

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 w-full">
          <Card2 title="Live Rating" description={liveRating} />
          <Card2 title="Highest Rating" description={maxRating} />
          <Card1 title="Best Rank" description={minRank} />
        </div>
      )}
    </div>
  );
};

export default RankandRating;
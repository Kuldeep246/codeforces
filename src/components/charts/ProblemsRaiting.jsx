import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { handleState } from '../../store/atoms';
import { useRecoilValue } from 'recoil';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProblemsRating = () => {
  const handle = useRecoilValue(handleState);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Number of Problems Solved',
        backgroundColo: 'rgb(127, 39, 255)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [],
      },
    ],
  });

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
    maintainAspectRatio: true,
    backgroundColor: 'rgb(127, 39, 255)',
    hoverBackgroundColor: 'rgb(134, 74, 249)',
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=5000`);
        const problems = response.data.result;

        const ratingToSolvedCount = {};

        problems.forEach((problem) => {
          if (problem.verdict === 'OK') {
            const rating = problem.problem.rating || 'Unknown';
            ratingToSolvedCount[rating] = (ratingToSolvedCount[rating] || 0) + 1;
          }
        });

        const newLabels = Object.keys(ratingToSolvedCount);
        const newData = Object.values(ratingToSolvedCount);

        setChartData({
          ...chartData,
          labels: newLabels,
          datasets: [
            {
              ...chartData.datasets[0],
              data: newData,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error fetching data:', error);
        toast.error('Error fetching data: ' + error.message, {
          position: 'bottom-right',
          autoClose: 4000,
        })
      }
    };

    fetchData();
  }, [chartData, handle]);

  return (
    <div className='w-full max-w-screen-lg mx-auto'>

      <div className='h-[20rem] md:h-[35rem] py-10  p-4'>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ProblemsRating;

import React, { useRef, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { colors, hoverColors } from '../../utils/colors';
import { useRecoilValue } from 'recoil';
import { apidataState, handleState } from '../../store/atoms';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tags = () => {
  const chartRef = useRef(null);
  const handle = useRecoilValue(handleState);
  const apiData = useRecoilValue(apidataState);
  const [chartData, setChartData] = useState({
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [20, 40, 30],
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tags = apiData
          .filter(item => item.verdict === "OK") 
          .map(item => item.problem.tags)
          .flat();

        const tagsCounts = tags.reduce((acc, tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
          return acc;
        }, {});


        const sortedTagsArray = Object.entries(tagsCounts);
        sortedTagsArray.sort((a, b) => b[1] - a[1]);


        const sortedTagsCounts = Object.fromEntries(sortedTagsArray);

        setChartData({
          labels: Object.keys(sortedTagsCounts),
          datasets: [
            {
              data: Object.values(sortedTagsCounts),
              backgroundColor: colors,
              hoverBackgroundColor: hoverColors,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data: ' + error.message, {
          position: 'bottom-right',
          autoClose: 4000,
        })
      }
    };

    fetchData();
  }, [handle]);


  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
          },
          boxWidth: 10,
          usePointStyle: true,
        },
        position: "right",
        align: "centre",
      },

    },
    aspectRatio: 1.2,
  };

  return (
    <div className='w-full max-w-screen-lg mx-auto'>
      <div className='h-[20rem] md:h-[35rem] py-10 p-4'>
        <Doughnut data={chartData} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default Tags;

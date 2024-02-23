import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Colors } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { apidataState, handleState } from '../../store/atoms';
import { colors, hoverColors } from '../../utils/colors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Languages = () => {
  const handle = useRecoilValue(handleState);
  const apiData=useRecoilValue(apidataState);
  const [chartData, setChartData] = useState({
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {


        const programmingLanguages = apiData.map(item => item.programmingLanguage);


        const languageCounts = programmingLanguages.reduce((acc, language) => {
          acc[language] = (acc[language] || 0) + 1;
          return acc;
        }, {});

        console.log(languageCounts);


        setChartData({
          labels: Object.keys(languageCounts),
          datasets: [
            {
              data: Object.values(languageCounts),
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
            size: 14,
          },
        },
        position: "right",
        align: "center",

      },
    },
    aspectRatio: 1.2,

  };

  return (

    <div className="h-[15rem] md:h-[25rem] w-2/5">
      <div className='size-full px-4 '>
        <Pie data={chartData} options={options} />
      </div>
    </div>

  );
};

export default Languages;




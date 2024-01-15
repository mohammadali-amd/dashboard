import { Line } from 'react-chartjs-2';
import {
   Chart as ChartJs,
   LineElement,
   CategoryScale,
   LinearScale,
   PointElement
} from 'chart.js';

ChartJs.register(
   LineElement,
   CategoryScale,
   LinearScale,
   PointElement
);

const Dashboard = () => {
   const data = {
      type: 'bar',
      labels: ["May 12", "May 13", "May 14", "May 15", "May 16"],
      datasets: [{
         label: '# of Votes',
         data: [8, 7.8, 6, 6.6, 8, 7.2, 6.5],
         backgroundColor: "transparent",
         borderColor: '#f26c6d',
         borderWidth: 4,
         pointBorderColor: "#c74141",
         pointBorderWidth: 3,
      }]
   }

   const options = {
      type: 'line',
      plugins: {
         legend: false,
      },
      scales: {
         x: {
            grid: {
               display: false
            }
         },
         y: {
            min: 2,
            max: 10,
            ticks: {
               stepSize: 2,
               callback: (value) => value * 10 + '$'
            },
            grid: {
               borderDash: [10]
            }
         }
      }
   }

   return (
      <div className='w-[600px] h-[600px] mx-auto mt-[5rem]'>
         <Line data={data} options={options}></Line>
      </div>
   );
}

export default Dashboard;
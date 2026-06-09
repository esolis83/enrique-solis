export const fitnessTrackingSystem = {
  title: 'Fitness Data Visualization',
  description: 'Creating interactive charts for progress tracking',
  language: 'javascript',
  code: `// React component with Chart.js for fitness progress
import { LineChart } from 'react-chartjs-2';

export const FitnessChart = ({ workoutData }) => {
  const chartData = {
    labels: workoutData.map(w => w.date),
    datasets: [
      {
        label: 'Calories Burned',
        data: workoutData.map(w => w.calories),
        borderColor: '#bf4956',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Workouts',
        data: workoutData.map(w => w.workouts),
        borderColor: '#8d8f91',
        fill: false,
        tension: 0.4
      }
    ]
  };

  return <LineChart data={chartData} options={{ responsive: true }} />;
};`
};

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './PieChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ income, expense }) => {
  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ['#c0f2d8', '#f8d7da'],
        borderColor: ['#198754', '#dc3545'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h3>Income vs Expense</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

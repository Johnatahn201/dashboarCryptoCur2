// src/components/CryptoChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const CryptoChart = ({ data }) => {
    const chartData = {
        labels: data.map(point => new Date(point[0]).toLocaleDateString()),
        datasets: [
            {
                label: 'Price',
                data: data.map(point => point[1]),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default CryptoChart;

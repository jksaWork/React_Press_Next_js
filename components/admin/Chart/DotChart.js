import React from 'react';
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};
const randomInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const data = {
	datasets: [
		{
			label: 'A ativtiy',
			data: Array.from({ length: 100 }, () => ({
				x: randomInteger(1, 100),
				y: randomInteger(1, 100),
			})),
			backgroundColor: 'rgba(255, 99, 132, 1)',
		},
	],
};

export function DotChart() {
	return <Scatter options={options} data={data} />;
}

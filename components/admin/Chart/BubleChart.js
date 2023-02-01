import React from 'react';
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

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
			label: 'articals',
			data: Array.from({ length: 50 }, () => ({
				x: randomInteger(1, 100),
				y: randomInteger(1, 100),
				r: randomInteger(1, 9),
			})),
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Blue commints',
			data: Array.from({ length: 50 }, () => ({
				x: randomInteger(1, 100),
				y: randomInteger(1, 100),
				r: randomInteger(1, 9),
			})),
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

export function Buble() {
	return <Bubble options={options} data={data} maxHeight={300} maxWidth='100%' />;
}

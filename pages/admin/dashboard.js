import React from 'react'
import AuthAxios from '../../Helpers/AuthAxios';
import axios from 'axios'
import { Divider, CircularProgress, Box, CircularProgressLabel, Grid, GridItem } from '@chakra-ui/react'
import BerCampComponent from '../../components/admin/BerCampComponent'
import { VictoryBar } from 'victory'
import lineComponent from '../../components/admin/LineComponent';
import { Line, PolarArea, Pie, Bar, Doughnut } from 'react-chartjs-2';
import { PieChart } from '../../components/admin/Chart/PieChart';
import { Buble } from '../../components/admin/Chart/BubleChart';
import { DotChart } from '../../components/admin/Chart/DotChart'
import DashboardGrid from '../../components/admin/DashboardGrid';
import CategoriesTabel from '../../components/admin/CategoriesTabel'
import LatestPostTable from '../../components/admin/LatestPostTable';
function dashboard() {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'post chart',
			},
		},
	}
	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: [
					100, 200, 150, 400, 800, 600, 100
				],
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		]
	}

	return (
		<div className='container' >
			<BerCampComponent location={['control-panel']} p={5} m={5} />
			<DashboardGrid />
			<Grid templateColumns='auto 1fr 2fr' gap={4} h={300} ma={3}>
				<GridItem>
					<PieChart
					/>
				</GridItem>
				<GridItem></GridItem>
				<GridItem>
					<DotChart />
				</GridItem>
			</Grid>
			<Divider />
			<Grid templateColumns='repeat(2, minmax(500px , 1fr))' gap={4} h={300} ma={3} p={5}>
				<GridItem>
					<Buble
					/>
				</GridItem>
				<GridItem>
					<Line
						options={options}
						data={data}
						maxHeight={300}
						maxWidth='100%'
					/>
				</GridItem>
			</Grid>
			<Grid templateColumns='repeat(2, minmax(500px , 1fr))' gap={4} h={300} ma={3} p={5}>
				<GridItem>
					<CategoriesTabel />
				</GridItem>
				<GridItem>
					<LatestPostTable />
				</GridItem>
			</Grid>
		</div>
	)
}
dashboard.getLayout = 'admin';
export default dashboard
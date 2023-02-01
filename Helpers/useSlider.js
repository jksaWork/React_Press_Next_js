import React from 'react'
import useSWR from 'swr';
function useSlider() {
	const fetcher = async () => {
		const response = await fetch('http://localhost:8000/api/quetions/slider/latestAdd')
		const data = await response.json();
		return data;
	}
	return useSWR('fetch-latest-and-slider', fetcher);
}

export default useSlider

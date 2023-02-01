import React from 'react'
import useSWR from 'swr'

function useCategorieswithArtical() {
	const fetcher = async () => {
		const API = 'http://localhost:8000/api/categories/with/articals'
		const response = await fetch(API);
		const data = await response.json();
		return data;
	}
	return useSWR('useCategorieswithArtical-fetcher', fetcher)
}

export default useCategorieswithArtical

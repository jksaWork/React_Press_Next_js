import React from 'react'
import useSWR from 'swr'
import { useQuery } from 'react-query'
import axios from 'axios';

function useCategories() {
	const fetcher = () => {
		const API = 'http://localhost:8000/api/categories'
		const data = axios(API)
		// const data = await response.json();
		return data;
	}
	return useQuery('categories-fetcher', fetcher)
}

export default useCategories

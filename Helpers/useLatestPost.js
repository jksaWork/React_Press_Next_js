import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useQuery } from 'react-query'

function useLatestPost() {
	const fetcher = () => {
		const API = 'http://localhost:8000/api/quetions'
		return axios(API);
	}
	return useQuery('latest-post-query-fetcher', fetcher)
}

export default useLatestPost

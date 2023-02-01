
import { useQuery } from 'react-query'
import React from 'react'
import axios from 'axios'

const FetchData = (page) => {
	return axios.get(`http://localhost:8000/api/quetions?page=${page}`)
}
function UseArticals(page) {
	return useQuery(['fetch-artical', page], () => FetchData(page), {
		staleTime: 300000,
		onSuccess: (data) => {
			console.log(data);
		}
	});
}

export default UseArticals

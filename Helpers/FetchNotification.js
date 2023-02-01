import axios from 'axios'
import React from 'react'
import AuthAxios from './AuthAxios'

import { useQuery } from 'react-query'

function FetchNotification() {
	const Axios = AuthAxios();
	const fetcher = () => {
		return axios.get('http://localhost:8000/api/notification')
	}
	return useQuery('fetch-notifications', fetcher, {
		staleTime: 3000000
	})
}

export default FetchNotification

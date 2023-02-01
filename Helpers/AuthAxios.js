import React from 'react'
import axios from 'axios';
import user from './User'
import AppStorage from './AppStorage'

function AuthAxios() {
	if (user.LoginIn()) {
		axios.defaults.headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${AppStorage.getToken()}`
		}
	} else {
		user.Logout()
	}
	return axios;
}

export default AuthAxios

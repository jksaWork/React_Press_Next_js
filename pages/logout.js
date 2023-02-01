import React from 'react'
import AuthAxios from '../Helpers/AuthAxios'
import user from '../Helpers/User'

function logout() {
	const Axios = AuthAxios()
	Axios.get('http://localhost:8000/api/auth/logout').then((res) => consoel.log(res));
	user.Logout();
	return null;
}

export default logout

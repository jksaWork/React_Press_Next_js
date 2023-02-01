class AppStorage {
	setToken(token) {
		localStorage.setItem('token', token);
	}
	setUserData(user_data) {
		localStorage.setItem('user_data', JSON.stringify(user_data));
	}

	setUserDataAndToken(user_data, Token) {
		this.setToken(Token)
		this.setUserData(user_data)
	}
	getToken() {
		if (typeof window !== 'undefined') {
			return localStorage.token;
		} else {
			console.log('we are running on the server');
		}

	}
	getUserData() {
		if (typeof window !== 'undefined') {
			return JSON.parse(localStorage.getItem('user_data'));
		}
	}
	clear() {
		if (typeof window != 'undefined') {
			localStorage.removeItem('user_data');
			localStorage.removeItem('token');
		}
	}
}

const appStorage = new AppStorage;
export default appStorage;
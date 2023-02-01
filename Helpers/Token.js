class Token {
	isValid(token) {
		const payload = this.payload(token);
		if (payload) {
			if (payload.iss == 'http://localhost:8000/api/auth/login' || payload.iss == "http://localhost:8000/api/auth/register") {
				return true;
			} else {
				return false
			}
		}
		return false;
	}

	payload(token) {
		const payload = token.split('.')[1];
		return this.decode(payload)
	}

	decode(data) {
		return JSON.parse(atob(data));
	}

	isBase64(str) {
		console.log(btoa(atob(str)));
		try {
			return btoa(atob(str)).replace(/=/, ' ') == str;
		} catch (err) {
			return true
		}
	}
}
const token = new Token();
export default token;
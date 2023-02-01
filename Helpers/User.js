import axios from 'axios'
import token from './Token';
import appStorage from './AppStorage'
class User {
	async login(data) {
		const loginDone = true;
		data = await axios
			.post("http://localhost:8000/api/auth/login", data)
			.then((re) => {
				return this.ResponseAfterLogin(re);
				loginDone = true;
			})
			.catch((err) => {
				loginDone = false;
				return err.response;
			});
		return loginDone;
	}

	ResponseAfterLogin(re) {
		const tokenFromData = re.data.access_token;
		const UserFromData = re.data.user;
		console.log(UserFromData, tokenFromData);

		if (token.isValid(re.data.access_token)) {
			console.log(re);
			appStorage.setUserDataAndToken(UserFromData, tokenFromData);
			return true;

			document.location = '/admin/dashboard';
		}

	}

	hasToken() {
		const TokenFromStorage = appStorage.getToken();
		if (TokenFromStorage) {
			return token.isValid(TokenFromStorage) ? true : this.Logout();
		}
		return false;
	}

	LoginIn() {
		return this.hasToken();
	}


	Logout() {
		appStorage.clear();
		if (typeof window != 'undefined') {
			document.location = '/login';
		}
	}

	UserDate() {
		return appStorage.getUserData();
	}
	UserId() {
		if (this.LoginIn) {
			const payload = token.payload(appStorage.getToken());
			return payload.sub;
		}

	}
	UserOwn(id) {
		return id == this.UserId();
	}

}
const user = new User;
export default user;
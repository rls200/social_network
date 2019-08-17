import { instance } from '../instanceAxios';

export const authApi = {
	me() {
		return instance.get(`auth/me`).then(response => response.data);
	},
	login(email, password, rememberMe) {
		return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
	},
	logout() {
		return instance.delete(`auth/login`).then(response => response.data);
	}
}
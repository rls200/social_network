import { instance } from '../instanceAxios';

export const headerApi = {
	header() {
		return instance.get(`auth/me`).then(response => response.data)
	}
}
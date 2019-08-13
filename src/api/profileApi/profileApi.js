import { instance } from "../instanceAxios";

export const profileApi =  {
	profile (userId) {
		return instance.get(`profile/` + userId).then(response => response.data)
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus (status) {
		return instance.put(`profile/status`, {status:status});
	}
}
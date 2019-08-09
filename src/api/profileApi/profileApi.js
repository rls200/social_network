import { instance } from "../instanceAxios";

export const profileApi =  {
	profile (userId) {
		return instance.get(`profile/` + userId).then(response => response.data)
	}
}
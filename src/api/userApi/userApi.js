import { instance } from "../instanceAxios";

export const userApi =  {
	getUsers (pageSize = 1, currentPage = 10) {
		return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
	},
	follow (userId) {
		return instance.post(`follow/${userId}`).then(response => response.data)
	},
	unfollow (userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data)
	}
}
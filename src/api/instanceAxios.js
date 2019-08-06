import * as axios from "axios";

export const instance =  axios.create ({
	baseURL: 'https:/social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY' : '333141ec-55d9-42bc-8f11-2ac6edba91f3'
	}
})
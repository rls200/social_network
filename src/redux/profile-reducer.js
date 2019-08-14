import {profileApi} from "../api/profileApi/profileApi";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE =  'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initializationState = {
	postsData: [
		{id: 1, message: 'Hi, how are you?', likesCount: 10, avatar: 'https://forum.exbo.su/assets/avatars/MUCd73rCuZMCKd6k.png'},
		{id: 2, message: 'Its my first', likesCount: 15, avatar: 'https://im0-tub-ru.yandex.net/i?id=6bd07a276f75b34230f96890b524bd9e-sr&n=13'}
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initializationState, action) => {

	switch(action.type) {

		case ADD_POST: {
			return {
				...state,
				postsData: [
					...state.postsData,
					{id: 5, message: action.newPostText, likesCount: 0, avatar: 'https://forum.exbo.su/assets/avatars/MUCd73rCuZMCKd6k.png'}
				],
			};
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}

		case SET_STATUS: {
			return { ...state, status: action.status}
		}

		default: 
			return state;
	}

}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
	return (dispath) => {
		profileApi.profile(userId).then(response => {
			dispath(setUserProfile(response));
		})
	}
}
export const getStatus = (userId) => {
	return (dispath) => {
		profileApi.getStatus(userId).then(response => {
			dispath(setStatus(response.data))
		})
	}
}
export const updateStatus = (status) => {
	return (dispath) => {
		profileApi.updateStatus(status).then(response => {
			response.data.resultCode === 0 && dispath(setStatus(status))
		})
	}
}
export default profileReducer;
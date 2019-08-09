import {profileApi} from "../api/profileApi/profileApi";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE =  'SET_USER_PROFILE';

const initializationState = {
	postsData: [
		{id: 1, message: 'Hi, how are you?', likesCount: 10, avatar: 'https://forum.exbo.su/assets/avatars/MUCd73rCuZMCKd6k.png'},
		{id: 2, message: 'Its my first', likesCount: 15, avatar: 'https://im0-tub-ru.yandex.net/i?id=6bd07a276f75b34230f96890b524bd9e-sr&n=13'}
	],
	newPostText: '',
	profile: null
}

const profileReducer = (state = initializationState, action) => {

	switch(action.type) {

		case ADD_POST: {
			return {
				...state,
				postsData: [
					...state.postsData,
					{id: 5, message: state.newPostText, likesCount: 0, avatar: 'https://forum.exbo.su/assets/avatars/MUCd73rCuZMCKd6k.png'}
				],
				newPostText: ''
			};
		}

		case UPDATE_NEW_POST_TEXT: {
			return  {
				...state,
				newPostText: action.newText
			};
		}

		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}



		default: 
			return state;
	}

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getProfile = (userId) => {
	return (dispath) => {
		profileApi.profile(userId).then(response => {
			dispath(setUserProfile(response));
		})
	}
}
export default profileReducer;
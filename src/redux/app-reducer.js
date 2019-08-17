import React from 'react';
import {authThunk} from "./auth-reduser";

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';

const initialState = {
	initialization: false
}

const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case INITIALIZATION_SUCCESS:
			return {
				...state,
				initialization: true
			}
		default:
			return state;
	}
}

export const setInitialization = () => ({type: INITIALIZATION_SUCCESS});
export const initializApp = () => (dispath) => {
	let dispathResult = dispath(authThunk());
	Promise.all([dispathResult]).then(() => {
		dispath(setInitialization());
	})
}
export default appReducer;
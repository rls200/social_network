import {authApi} from "../api/authApi/authApi";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_LOADING = 'SET_IS_LOADING';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state;
    }
}

export const setUserData = (id, login, email, isAuth) => ({type:SET_USER_DATA, data: {id, login, email, isAuth} });
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const authThunk = () => (dispath) => {
    return (
        dispath(setIsLoading(true)),
        authApi.me().then(response => {
        dispath(setIsLoading(false));
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispath(setUserData(id, login, email, true));
        }
    }))
}

export const login = (email, password, rememberMi) => (dispath) => {
    authApi.login(email, password, rememberMi).then(response => {
        if (response.resultCode === 0) {
            dispath(authThunk());
        } else {
            let messageError = response.messages.length > 0 ? response.messages[0] : 'Some error';
            dispath(stopSubmit('login',  {_error: messageError}));
        }
    })
}

export const logout = () => (dispath) => {
        authApi.logout().then(response => {
            if (response.resultCode === 0) {
                dispath(setUserData(null, null, null, false));
            }
        })
}

export default authReduser;
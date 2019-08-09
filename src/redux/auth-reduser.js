import {headerApi} from "../api/headerApi/headerApi";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH';
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
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state;
    }
}

export const setUserData = (id, login, email) => ({type:SET_USER_DATA, data: {id, login, email} });
export const setIsAuth = (isAuth) => ({type:SET_IS_AUTH,  isAuth});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const authThunk = () => {
    return (dispath) => {
        dispath(setIsLoading(true));
        headerApi.header().then(response => {
            dispath(setIsLoading(false));
            if (response.resultCode == 0) {
                let {id, login, email} = response.data;
                dispath(setUserData(id, login, email));
                dispath(setIsAuth(true));
            }
        })
    }
}

export default authReduser;
import {userApi} from "../api/userApi/userApi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_LOADING = 'SET_IS_LOADING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followingProgress: false
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, users: [...action.users] }


        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return  { ...state, totalUsersCount: action.totalUsersCount}

        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        case FOLLOWING_PROGRESS:
            return { ...state, followingProgress: action.followingProgress }

        default:
            return state;
    }
}

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unFollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount =(totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});
export const toggleFollowingProgress = (followingProgress) => ({type: FOLLOWING_PROGRESS, followingProgress});

export const getUsers = (pageSize, currentPage) => {
    return (dispath) => {
        dispath(setIsLoading(true));
        userApi.getUsers(pageSize, currentPage).then(response => {
            dispath(setIsLoading(false));
            dispath(setUsers(response.items));
            dispath(setTotalUsersCount(response.totalCount));
        });
    }

}

export const getPage = (pageSize, pageNumber) => {
    return (dispath) => {
        dispath(setCurrentPage(pageNumber));
        dispath(setIsLoading(true));
        userApi.getUsers(pageSize, pageNumber).then(response => {
            dispath(setIsLoading(false));
            dispath(setUsers(response.items));
        });
    }
}

export const followingThunk = (userId) => {
    return (dispath) => {
        dispath(toggleFollowingProgress(true));
        userApi.follow(userId).then(response => {
            if(response.resultCode == 0) {
                dispath(follow(userId));
            }
            dispath(toggleFollowingProgress(false));
        })
    }
}

export const unFollowingThunk = (userId) => {
    return (dispath) => {
        dispath(toggleFollowingProgress(true));
        userApi.unfollow(userId).then(response => {
            if(response.resultCode == 0) {
                dispath(unFollow(userId));
            }
            dispath(toggleFollowingProgress(false));
        })
    }
}

export default usersReduser;
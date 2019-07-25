const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    /*users: [
        { id: 1, followed: true, fullName: 'Andrey', status: 'ereet faser bypori', location: { sity: 'Moscow', country: 'Russia' } },
        { id: 2, followed: false, fullName: 'Sasha', status: 'dypik losacn gyrem yojr', location: { sity: 'Moscow', country: 'Russia' } },
        { id: 2, followed: true, fullName: 'Igor', status: 'killewq homitur molewosg', location: { sity: 'Moscow', country: 'Russia' } }
    ]*/
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follwed: true};
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }

        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }

        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReduser;
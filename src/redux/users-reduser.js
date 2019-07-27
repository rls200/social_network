const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Andrey', avatar: 'https://pp.userapi.com/c848632/v848632459/2c3d8/IIOeMFFcepg.jpg?ava=1', status: 'ereet faser bypori', location: { sity: 'Moscow', country: 'Russia' } },
        { id: 2, followed: false, fullName: 'Sasha', avatar: 'https://pp.userapi.com/c837727/v837727327/1c6a4/-8bZakIwuZ8.jpg?ava=1', status: 'dypik losacn gyrem yojr', location: { sity: 'Moscow', country: 'Russia' } },
        { id: 3, followed: true, fullName: 'Igor', avatar: 'https://cdn1.flamp.ru/0e6242afc92b66ebf0b054621ca2e052_100_100.jpg', status: 'killewq homitur molewosg', location: { sity: 'Moscow', country: 'Russia' } }
    ]
}

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
            return { ...state, users: [...state.users, ...action.users] }

        default:
            return state;
    }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReduser;
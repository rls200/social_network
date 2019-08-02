import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sidebar: sidebarReducer,
	usersPage: usersReduser,
	auth: authReduser
});

const store = createStore(reducers);
window.store = store;
export default store;
import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReduser from './users-reduser'

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sidebar: sidebarReducer,
	usersPage: usersReduser
});

const store = createStore(reducers);

export default store;
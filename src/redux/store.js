import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {

			_state: { 
					profilePage: {
						postsData: [
							{id: 1, message: 'Hi, how are you?', likesCount: 10, avatar: 'https://forum.exbo.su/assets/avatars/MUCd73rCuZMCKd6k.png'},
							{id: 2, message: 'Its my first', likesCount: 15, avatar: 'https://im0-tub-ru.yandex.net/i?id=6bd07a276f75b34230f96890b524bd9e-sr&n=13'}
						],
						newPostText: ''
					},
					messagesPage: {
						dialogsData: [
							{id: 1, name: 'Dimych', avatar: 'https://cdn1.flamp.ru/d549c13c65c661226ad041f9d132cc60_100_100.png'},
							{id: 2, name: 'Andrey', avatar: 'https://freelance.ru/img/avatars/2056169.png?030000'},
							{id: 3, name: 'Sveta', avatar: 'https://teinon.net/ficbook/uploads/avatars/avatar_PAVA2012_1491750540.png'},
							{id: 4, name: 'Sasha', avatar: 'https://teinon.net/ficbook/uploads/avatars/avatar_Laegmerllin_1524572413.png'},
							{id: 5, name: 'Victor', avatar: 'https://linustechtips.com/main/uploads/profile/photo-thumb-196199.png'},
							{id: 6, name: 'Valera', avatar: 'https://teinon.net/ficbook/uploads/avatars/avatar_Danulko_1486318107.png'}
						],
						messagesData: [
							{id: 1, message: 'Hi'},
							{id: 2, message: 'How saerty varetouch!!!'},
							{id: 3, message: 'Yoma'},
							{id: 4, message: 'Fady pady nill alenis'},
							{id: 5, message: 'Guplas das oirut'}
						],
						newMessageText: ''
					},
					sidebar: {
						navbarLinks: [
							{id: 1, link: '/profile', textLink: 'Profile'},
							{id: 2, link: '/dialogs', textLink: 'Message'},
							{id: 3, link: '/news', textLink: 'News'},
							{id: 4, link: '/music', textLink: 'Music'},
							{id: 5, link: '/settings', textLink: 'Settings'},
							{id: 6, link: '/users', textLink: 'Users'}
						],
						friends: [
							{id: 1, link: '/', name: 'Andrey', avatar: 'https://las-venturas.lt/forumas/uploads/profile/photo-thumb-14971.png'},
							{id: 2, link: '/', name: 'Sasha', avatar: 'https://forum.truckersmp.com/uploads/profile/photo-thumb-4360.png'},
							{id: 3, link: '/', name: 'Sveta', avatar: 'https://cdn2.scratch.mit.edu/get_image/gallery/3445165_170x100.png'}
						]
					}	
			},

			getState() {
				return this._state;
			},

			_callSubscriber() {
				console.log("state izmena");
			},

			subscrite(observer) {
				this._callSubscriber = observer;
			},
			dispatch(action) {
				
				this._state.profilePage = profileReducer(this._state.profilePage, action);
				this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
				this._state.sidebar = sidebarReducer(this._state.sidebar, action);
				this._callSubscriber(this._state);
			}
			

}

export default store;


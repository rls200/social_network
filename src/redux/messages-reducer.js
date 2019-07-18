const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initializationState = {
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
}

const messagesReducer = (state = initializationState, action) => {

	switch(action.type) {

		case ADD_MESSAGE:
			let newMessage = {
			id: 6,
			message: state.newMessageText
			};
			state.messagesData.push(newMessage);
			state.newMessageText = '';
			return state;

		case UPDATE_NEW_MESSAGE:
			state.newMessageText = action.message;
			return state;

		default:
			return state;
	}

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE, message: message });

export default messagesReducer;
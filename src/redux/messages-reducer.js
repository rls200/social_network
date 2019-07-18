const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';



const messagesReducer = (state, action) => {

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
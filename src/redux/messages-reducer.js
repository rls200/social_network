const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';



const messagesReducer = (state, action) => {
	
	if (action.type === ADD_MESSAGE) {
		let newMessage = {
			id: 6,
			message: state.newMessageText
		};
		state.messagesData.push(newMessage);
		state.newMessageText = '';
	} else if (action.type === UPDATE_NEW_MESSAGE) {
		state.newMessageText = action.message;
	}

	return state;
}

export default messagesReducer;
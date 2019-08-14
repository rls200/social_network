import React from 'react';
import DialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageFormRedux from './Message/AddMessageForm';

const Dialogs = (props) => {
	let state = props.messagesPage;

	let dialogsElements = state.dialogsData.map(
		d => <DialogItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>
	)

	let messagesElement = state.messagesData.map(
		m => <Message message={m.message} key={m.id} />
	)

	const sendMessage = (messageData) => {
		props.addMessage(messageData.messagTextarea);
	}

	return (
		<div className={DialogsCss.dialogs}>
			<div className={DialogsCss.dialogs_item}>
				{ dialogsElements }
			</div>
			<div className={DialogsCss.messages}>
				{ messagesElement }
				<AddMessageFormRedux onSubmit={sendMessage} />
			</div>
		</div>
	); 
}

export default Dialogs;
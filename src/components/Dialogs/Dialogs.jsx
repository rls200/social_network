import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let state = props.messagesPage;

	let dialogsElements = state.dialogsData.map(
		d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>
	)

	let messagesElement = state.messagesData.map(
		m => <Message message={m.message} />
	)

	let newMessagRef = React.createRef();

	let onAddMessage = () => {
		props.addMessage(); 
	}

	let onMessagChange = () => {
		let mess = newMessagRef.current.value;
		props.messagChange(mess);
	}
	return (
		<div className={DialogsCss.dialogs}>
			<div className={DialogsCss.dialogs_item}>
				{ dialogsElements }
			</div>
			<div className={DialogsCss.messages}>
				{ messagesElement }
				<div className={DialogsCss.messagTextarea}>
					<textarea ref={ newMessagRef } value={ state.newMessageText } onChange={ onMessagChange } placeholder="message"></textarea>
				</div>
				<div className={DialogsCss.messagesBtn}>
					<button onClick={ onAddMessage }>Add message</button>
				</div>
			</div>
		</div>
	); 
}

export default Dialogs;
import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/messages-reducer';

const Dialogs = (props) => {

	let dialogsElements = props.messagesPage.dialogsData.map(
		d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>
	)

	let messagesElement = props.messagesPage.messagesData.map(
		m => <Message message={m.message} />
	)

	let newMessagRef = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator()); 
	}

	let onMessagChange = () => {
		let mess = newMessagRef.current.value;
		props.dispatch(updateMessageActionCreator(mess));
	}
	return (
		<div className={DialogsCss.dialogs}>
			<div className={DialogsCss.dialogs_item}>
				{ dialogsElements }
			</div>
			<div className={DialogsCss.messages}>
				{ messagesElement }
				<div className={DialogsCss.messagTextarea}>
					<textarea ref={ newMessagRef } value={ props.messagesPage.newMessageText } onChange={ onMessagChange } placeholder="message"></textarea>
				</div>
				<div className={DialogsCss.messagesBtn}>
					<button onClick={ addMessage }>Add message</button>
				</div>
			</div>
		</div>
	); 
}

export default Dialogs;
import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsData.map(
		d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>
	)

	let messagesElement = props.state.messagesData.map(
		m => <Message message={m.message} />
	)

	let newMessagRef = React.createRef();

	let addNewMessag = () => {
		let newMessage = newMessagRef.current.value;
		return alert(newMessage);
	}

	return (
		<div className={DialogsCss.dialogs}>
			<div className={DialogsCss.dialogs_item}>
				{ dialogsElements }
			</div>
			<div className={DialogsCss.messages}>
				{ messagesElement }
				<div className={DialogsCss.messagTextarea}>
					<textarea ref={ newMessagRef }></textarea>
				</div>
				<div className={DialogsCss.messagesBtn}>
					<button onClick={ addNewMessag }>Add</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
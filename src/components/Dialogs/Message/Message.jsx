import React from 'react';
import MessageCss from './Message.module.css';

const Message = (props) => {
	return (
		<div className={MessageCss.message}>{props.message}</div>
	);
} 

export default Message;
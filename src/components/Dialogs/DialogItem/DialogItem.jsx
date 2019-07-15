import React from 'react';
import {NavLink} from 'react-router-dom';
import DialogItemCss from './DialogItem.module.css';

const DialogItem = (props) => {
	return (
		<div className={`${DialogItemCss.dialog} ${DialogItemCss.active}`}>
			<img src={props.avatar} />
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</div>
	);
}

export default DialogItem;
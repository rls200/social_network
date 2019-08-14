import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DialogsCss from "../Dialogs.module.css";

const AddMessageForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div className={DialogsCss.messagTextarea}>
			<Field component={'textarea'} name={'messagTextarea'} placeholder={'message'} />
		</div>
		<div className={DialogsCss.messagesBtn}>
			<button>Add message</button>
		</div>
	</form>
}

const AddMessageFormRedux = reduxForm({form: 'messageForm'})(AddMessageForm);

export default AddMessageFormRedux;
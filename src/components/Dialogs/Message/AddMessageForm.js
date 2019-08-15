import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DialogsCss from '../Dialogs.module.css';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../Common/FormsControls/FormsControls'

const maxLength15 = maxLengthCreator(15);
const AddMessageForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div className={DialogsCss.messagTextarea}>
			<Field
				component={Textarea}
				name={'messagTextarea'}
				placeholder={'message'}
				validate={[required, maxLength15]}
			/>
		</div>
		<div className={DialogsCss.messagesBtn}>
			<button>Add message</button>
		</div>
	</form>
}

const AddMessageFormRedux = reduxForm({form: 'messageForm'})(AddMessageForm);

export default AddMessageFormRedux;
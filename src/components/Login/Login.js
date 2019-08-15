import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Input} from '../Common/FormsControls/FormsControls';
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'login'} name={'login'} component={Input} validate={[required]}/>
			</div>
			<div>
				<Field placeholder={'password'} name={'password'} component={Input} validate={[required]}/>
			</div>
			<div>
				<Field type={'checkbox'} name={'rememberMi'} component={'input'}/> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
};
const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);


const Login = (props) =>  {
	const onSubmit = (formData) => {
		console.log(formData)
	}
		return <div>
			<h2>Login</h2>
			<LoginFormRedux onSubmit={onSubmit} />
			</div>

}

export default Login;
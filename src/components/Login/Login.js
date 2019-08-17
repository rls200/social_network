import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Redirect} from 'react-router-dom';
import {Input} from '../Common/FormsControls/FormsControls';
import {required} from "../../utils/validators/validators";
import {login, logout} from "../../redux/auth-reduser";
import LoginCSS from './Login.module.css';



const LoginForm = (props) => {
		return (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field placeholder={'login'} name={'login'} component={Input} validate={[required]}/>
				</div>
				<div>
					<Field placeholder={'password'} name={'password'} component={Input} validate={[required]} type={'password'} />
				</div>
				<div>
					<Field type={'checkbox'} name={'rememberMi'} component={'input'}/> remember me
				</div>
				{props.error &&
					<div className={LoginCSS.formError}>
						{props.error}
					</div>
				}
				<div>
					<button>Login</button>
				</div>
			</form>
		)
};
const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);


const Login = (props) =>  {
	const loginSubmit = (formData) => {
			props.login(formData.login, formData.password, formData.rememberMi);
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'}/>
	}
		return <div>
			<h2>Login</h2>
			<LoginFormRedux onSubmit={loginSubmit} />
			</div>

}

export default Login;
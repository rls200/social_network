import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'login'} name={'login'} component={'input'}/>
			</div>
			<div>
				<Field placeholder={'password'} name={'password'} component={'input'}/>
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

const createLoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const loginReduxForm = createLoginReduxForm(LoginForm);

class Login extends React.Component {
	submit = (formData) => {
		console.log(formData)
	}
	render() {
		return <loginReduxForm onSubmit={this.submit} />
	}
}

export default Login;
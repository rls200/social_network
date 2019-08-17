import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {login, logout} from "../../redux/auth-reduser";

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login, logout})(Login);
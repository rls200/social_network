import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
		isAuth: state.auth.isAuth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator())
		},
		messagChange: (mess) => {
			dispatch(updateMessageActionCreator(mess))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
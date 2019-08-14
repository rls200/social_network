import React from 'react';
import {compose} from 'redux';
import {addMessageActionCreator} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => ({
	messagesPage: state.messagesPage
})
const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (newMessageText) => {
			dispatch(addMessageActionCreator(newMessageText))
		}
	}
}


export default compose (
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
import React from 'react';
import {compose} from 'redux';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";


const mapStateToProps = (state) => ({
	messagesPage: state.messagesPage
})
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


export default compose (
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
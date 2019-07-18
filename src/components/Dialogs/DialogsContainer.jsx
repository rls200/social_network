import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {

	return (

		<StoreContext.Consumer> 
		{ (store) => {

				let state = store.getState().messagesPage;

				let addMessage = () => {
					store.dispatch(addMessageActionCreator()); 
				}

				let messagChange = (mess) => {
					store.dispatch(updateMessageActionCreator(mess));
				}
				return <Dialogs addMessage={ addMessage } messagChange={ messagChange } messagesPage={ state }/>

			}
		}
		</StoreContext.Consumer>
	)

}

export default DialogsContainer;
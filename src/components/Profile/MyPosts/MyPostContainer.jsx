import React from 'react';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostContainer = (props) => {

	return ( 
		<StoreContext.Consumer> 
		{	(store) => {

				let state = store.getState();

				let addPost = () => {
					store.dispatch(addPostActionCreator());
				}
				let onPostChange = (text) => {
					let action = updateNewPostTextActionCreator(text)
					store.dispatch(action);
				}

				return (

					<MyPosts updateNewPostText={ onPostChange } addPost={ addPost } postsData={ state.profilePage.postsData } newPostText={ state.profilePage.newPostText }/>
				)
			}
		}
		</StoreContext.Consumer>
	)
}

export default MyPostContainer;
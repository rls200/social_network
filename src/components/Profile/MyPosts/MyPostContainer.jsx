import React from 'react';
import Post from './Post/Post';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		onPostChange: (text) => {
			dispatch(updateNewPostTextActionCreator(text))
		}
	}
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;
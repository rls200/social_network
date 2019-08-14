import React from 'react';
import MyPostsCss from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from './AddPostForm';

const MyPosts = (props) => {
	let postsElements = props.postsData.map(
		p => <Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />
	);

	const setNewPost = (formData) => {
		props.addPost(formData.newPostText);
	}

	return (
		<div className={MyPostsCss.postBlock}>
			<p className={MyPostsCss.postBlock__title}>my post</p>
			<AddPostFormRedux onSubmit={setNewPost}/>
			<div className={MyPostsCss.posts}>
				{ postsElements }
			</div>
		</div>
	)
}

export default MyPosts;
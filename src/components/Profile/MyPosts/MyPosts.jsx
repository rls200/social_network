import React from 'react';
import MyPostsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsElements = props.postsData.map(
		p => <Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />
	);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
		props.updateNewPostText('');
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={MyPostsCss.postBlock}>
			<p className={MyPostsCss.postBlock__title}>my post</p>
			<div>
				<div className={MyPostsCss.textareaBlock}>
					<textarea ref={ newPostElement } value={ props.newPostText } onChange={ onPostChange }/>
				</div>
				<div className={MyPostsCss.postBlock__button}>
					<button onClick={ addPost } >Add post</button>
				</div>
			</div>
			<div className={MyPostsCss.posts}>
				{ postsElements }
			</div>
		</div>
	)
}

export default MyPosts;
import React from 'react'
import MyPostsCss from "./MyPosts.module.css";
import { Field, reduxForm } from 'redux-form';


const postForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
			<div className={MyPostsCss.textareaBlock}>
				<Field placeholder={'post'} component={'textarea'} name={'newPostText'} type={'text'}/>
			</div>
			<div className={MyPostsCss.postBlock__button}>
				<button>Add post</button>
			</div>
	</form>
}

const AddPostFormRedux = reduxForm({form: 'postForm'})(postForm);

export default AddPostFormRedux;
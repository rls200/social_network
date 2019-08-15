import React from 'react'
import MyPostsCss from "./MyPosts.module.css";
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../Common/FormsControls/FormsControls';

const maxLenght30 = maxLengthCreator(30);
const postForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
			<div className={MyPostsCss.textareaBlock}>
				<Field
					component={Textarea}
					placeholder={'post'}
					name={'newPostText'}
					type={'text'}
					validate={ [required, maxLenght30]}
				/>
			</div>
			<div className={MyPostsCss.postBlock__button}>
				<button>Add post</button>
			</div>
	</form>
}

const AddPostFormRedux = reduxForm({form: 'postForm'})(postForm);

export default AddPostFormRedux;
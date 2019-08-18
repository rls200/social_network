import React from 'react';
import PostCss from './Post.module.css';

const Post = (props) => {
	return (
		<div className={PostCss.item}>
			<img src={props.avatar} alt={'post-avatar'}/>
			{props.message}
			<div>
				<span>Like - {props.likesCount}</span>
			</div>
		</div>
	)
}

export default Post;
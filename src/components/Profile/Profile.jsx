import React from 'react';
import ProfileCss from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

	return (
		<div className={ProfileCss.content}>
			<ProfileInfo profile={props.profile} />
			<MyPostContainer /> 
		</div>
	);
}

export default Profile; 
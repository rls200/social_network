import React from 'react';
import ProfileCss from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
	return (
		<div className={ProfileCss.content}>
			<ProfileInfo />
			<MyPostContainer /> 
		</div>
	);
}

export default Profile; 
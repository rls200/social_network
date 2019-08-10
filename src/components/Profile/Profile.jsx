import React from 'react';
import ProfileCss from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo';
import {Redirect} from 'react-router-dom';

const Profile = (props) => {
	if (!props.isAuth) return <Redirect to={'/login'}/>
	return (
		<div className={ProfileCss.content}>
			<ProfileInfo profile={props.profile} />
			<MyPostContainer /> 
		</div>
	);
}

export default Profile; 
import React from 'react';
import ProfileCss from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
	return (
		<div className={ProfileCss.content}>
			<ProfileInfo />
			<MyPosts 
				postsData={props.profilePage.postsData} 
				dispatch={props.dispatch}
				newPostText={props.profilePage.newPostText}
			/>
		</div>
	);
}

export default Profile;
import React from 'react';
import ProfileCss from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from "./ProfileInfo/ProfileStatus";
import {updateStatus} from "../../redux/profile-reducer";

const Profile = (props) => {
	return (
		<div className={ProfileCss.content}>
			<ProfileInfo profile={props.profile} />
			<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
			<MyPostContainer />
		</div>
	);
}

export default Profile; 
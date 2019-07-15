import React from 'react';
import ProfileInfoCss from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div className={ProfileInfoCss.profileInfo}>
			<div><img src='http://a41g.com/wp-content/uploads/2016/12/parallax-plane.jpg' /></div>
			<div className={ProfileInfoCss.profileInfo__desc}>ava + description</div>
		</div>
	);
}

export default ProfileInfo;
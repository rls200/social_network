import React from 'react';
import ProfileInfoCss from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/preloader';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={ProfileInfoCss.profileInfo}>
			{/*<div><img src='http://a41g.com/wp-content/uploads/2016/12/parallax-plane.jpg' /></div>*/}
			<div className={ProfileInfoCss.profileInfo__desc}>
				<div className={ProfileInfoCss.profileInfo__desc__avatar + ' ' + ProfileInfoCss.profileInfo__desc__vn}>
					<h3>{props.profile.fullName}</h3>
					<img src={props.profile.photos.large} alt=""/>
					<h4>Обо мне</h4>{props.profile.aboutMe}
				</div>
				<div className={ProfileInfoCss.profileInfo__desc__contacts + ' ' + ProfileInfoCss.profileInfo__desc__vn}>
					<div>
						<h3>Мои контакты</h3>
						<ul>
							{Object.keys(props.profile.contacts).map(contact => props.profile.contacts[contact] != null && <li>{props.profile.contacts[contact]}</li>)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;
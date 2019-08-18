import React from 'react';
import {NavLink} from 'react-router-dom';
import NavbarCss from './Navbar.module.css';

const Navbar = (props) => {
	let state = props.sidebar;
	let navbarElements = state.navbarLinks.map((link, index) => {
		return (
			<div className={NavbarCss.item} key={index}>
				<NavLink to={link.link} activeClassName={NavbarCss.active} key={link.id}>{link.textLink}</NavLink>
			</div>
		);
	});
	let friendsElements = state.friends.map((friend, index) => {
		return (
			<div className={NavbarCss.friend} key={index}>
				<img src={friend.avatar} alt={'avatar'}/>
				<NavLink to={friend.link}>{friend.name}</NavLink>
			</div>
		);
	});

	return (

		<div className={NavbarCss.siteBar}>
			<nav className={NavbarCss.nav}>
				{ navbarElements }
			</nav>
			<div className={NavbarCss.friends}>
				{ friendsElements }
			</div>
		</div>

	)
}

export default Navbar;
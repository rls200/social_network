import React from 'react';
import HeaderCss from './Header.module.css';

const Header = () => {
	return (
		<header className={HeaderCss.header}>
			<img src='https://www.freepnglogos.com/uploads/eagle-png-logo/morehead-state-eagle-png-logo-8.png' />
		</header>
	);
}

export default Header;
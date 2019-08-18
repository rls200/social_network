import React from 'react';
import HeaderCss from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Preloadedr from "../Common/Preloader/preloader";

const Header = (props) => {
    return (
        <header className={HeaderCss.header}>
            <img src='https://www.freepnglogos.com/uploads/eagle-png-logo/morehead-state-eagle-png-logo-8.png' alt={'logotip'}/>
            <div className={HeaderCss.loginBlock}>
                {props.isLoading ? <Preloadedr/> :
                  props.isAuth ?
                    <div>
                      <span>{props.login}</span>
                      <button onClick={props.logout}>Logout</button>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
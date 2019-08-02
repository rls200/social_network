import React from 'react';
import HeaderCss from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Preloadedr from "../Common/Preloader/preloader";
import {setIsLoading} from "../../redux/auth-reduser";

const Header = (props) => {
    return (
        <header className={HeaderCss.header}>
            <img src='https://www.freepnglogos.com/uploads/eagle-png-logo/morehead-state-eagle-png-logo-8.png'/>
            <div className={HeaderCss.loginBlock}>
                {props.isLoading ? <Preloadedr/> : props.isAuth ? <h3>{props.login}</h3> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
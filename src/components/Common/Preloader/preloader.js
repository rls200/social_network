import React from 'react';
import PreloadedrImg from '../../../assets/images/spinner-svg-page-loading-2.gif';
import PreloaderCss from './preloader.module.css';

let Preloadedr = (props) => {
    return (
        <div>
            <img className={PreloaderCss.size} src={PreloadedrImg} alt='Preloadedr'/>
        </div>
    )
}

export default Preloadedr;
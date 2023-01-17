import React from 'react';
import style from './Header.module.scss'
const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://www.soitron.pl/wp-content/themes/soitron/img/logo_final__web.png" alt=""/>
        </header>
    );
};

export default Header;
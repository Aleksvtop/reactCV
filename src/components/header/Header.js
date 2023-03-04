import React from 'react';
import style from './Header.module.css'
import Nav from "./headerNav/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
};

export default Header;
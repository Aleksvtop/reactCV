import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="" className="href">Главная</a>
            <a href="" className="href">Навыки</a>
            <a href="" className="href">Проекты</a>
            <a href="" className="href">Контакты</a>
        </div>
    );
};

export default Nav;
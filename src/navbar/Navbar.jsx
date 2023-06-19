import React from 'react';
import cls from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cls.Navbar}>
                <NavLink className={cls.link} to='/profile'>Профиль</NavLink>
                <NavLink className={cls.link} to='/messages'>Сообщения</NavLink>
                <NavLink className={cls.link} to='/'>Новости</NavLink>
                <NavLink className={cls.link} to='/music'>Музыка</NavLink>
                <NavLink className={cls.link} to='/settings'>Настройки</NavLink>
        </div>
    );
};

export default Navbar;
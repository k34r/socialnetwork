import React from 'react';
import cls from './Header.module.css';

const Header = () => {
    return (
        <div className={cls.Header}>
            <img className={cls.header_ico} alt='ico'
             src={'https://cdn-icons-png.flaticon.com/512/7606/7606205.png'}/>
        </div>
    );
};

export default Header;
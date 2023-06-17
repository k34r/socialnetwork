import React from 'react';
import cls from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <img className={cls.profile_avatar} alt='profile_ico' src={'https://i.pinimg.com/736x/46/2a/0b/462a0b54123bea84c00e86f3d734aad3.jpg'}/>
            <p>Дмитрий К.</p>
            <p>День рождения: 2 января</p>
            <p>Город: Нижнепупинск</p>
            <p>Образование: 3 класса церковно-приходской школы</p>
        </div>
    );
};

export default Profile;
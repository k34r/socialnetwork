import React from 'react';
import cls from "./Profile.module.css";



const Profile = (props) => {console.log(props)
    return (
        <div>
            <img className={cls.profile_avatar} alt='profile_ico' src={props.profile[0].img}/>
            <p>{props.profile[0].name}</p>
            <p>{props.profile[0].birthday}</p>
            <p>{props.profile[0].city}</p>
            <p>{props.profile[0].education}</p>
        </div>
    );
};

export default Profile;
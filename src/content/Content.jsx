import React from 'react';
import cls from "./Content.module.css";
import {Route, Routes} from "react-router-dom";
import Profile from "./profile/Profile";
import Messages from "./messages/Messages";
import News from "./news/News";
import Settings from "./settings/Settings";
import Music from "./music/music";

const Content = () => {
    return (
        <div className={cls.Content}>
            <img className={cls.img} alt='sky'
                 src={'https://img.freepik.com/premium-photo/mountain-panorama-with-green-field-and-blue-sky-super-wide-angle-background-and-landscape-concept_479694-1726.jpg?w=2000'}/>
            <div className={cls.routes_wrapper}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}></Route>
                <Route path={'/messages'} element={<Messages/>}></Route>
                <Route path={'/news'} element={<News/>}></Route>
                <Route path={'/music'} element={<Music/>}></Route>
                <Route path={'/settings'} element={<Settings/>}></Route>
            </Routes>
        </div>
</div>
    );
};

export default Content;
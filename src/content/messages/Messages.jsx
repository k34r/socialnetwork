import React from 'react';
import cls from './Messages.module.css';



const Messages = (props) => {
    return (
        <div>
            <div className={cls.userinput}>
                <textarea className={cls.textarea}>Мое сообщение</textarea>
                <button className={cls.button}>Отправить</button>
            </div>
            { props.posts.map( (post) => {
                return (
                    <div className={cls.post_wrapper}>
                        <img alt='avatar' className={cls.img} src={post.img}/>
                        <p className={cls.post}>{post.post}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Messages
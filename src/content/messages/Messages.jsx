import React from 'react';
import cls from './Messages.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux";

const Messages = (props) => {
    let textarea = React.createRef();
    const onTextareaChange = () => {
        props.dispatch(updateNewPostTextActionCreator(textarea.current.value))
        ;
    }

    const buttonClick = () => {
       // props.addPost(textarea.current.value);
        props.dispatch(addPostActionCreator());
    }

    return (
        <div>
            <div className={cls.userinput}>
                <textarea className={cls.textarea} ref={textarea} onChange={onTextareaChange} value={props.newPostText}/>
                <button className={cls.button} onClick={buttonClick}>Отправить</button>
            </div>
            { props.posts.map( (post) => {
                return (
                    <div className={cls.post_wrapper} key={post.id}>
                        <img alt='avatar' className={cls.img} src={post.img}/>
                        <p className={cls.post}>{post.post}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Messages
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, state, subscribe, updateNewPostText} from "./redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {

    root.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    );

}

rerenderEntireTree();

subscribe(rerenderEntireTree);
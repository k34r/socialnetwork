import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {

    root.render(
        <App state={store.get_state()} dispatch={store.dispatch.bind(store)}/>
    );

}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
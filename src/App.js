import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import cls from "./App.module.css"
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Content from "./content/Content";
import {updateNewPostText} from "./redux";

function App(props) {
    return (
        <BrowserRouter>
        <div className={cls.App}>
            <Header/>
            <Navbar/>
            <Content state={props.state} dispatch={props.dispatch}/>
        </div>
        </BrowserRouter>
    );
}

export default App;

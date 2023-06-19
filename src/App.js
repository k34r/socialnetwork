import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import cls from "./App.module.css"
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Content from "./content/Content";
import {state} from './redux';

function App() {
    return (
        <BrowserRouter>
        <div className={cls.App}>
            <Header/>
            <Navbar/>
            <Content state={state}/>
        </div>
        </BrowserRouter>
    );
}

export default App;

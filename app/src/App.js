import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/Header";
import Media from "./components/media/Media";

class App extends Component {
    render() {
        return (
            <div className="o-app">
                <Header/>
                <div className="o-container">
                    <Media/>
                    <Media/>
                    <Media/>
                    <Media/>
                    <Media/>
                </div>
            </div>
        );
    }
}

export default App;

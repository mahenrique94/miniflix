import React, { Component } from 'react';
import './App.css';

import Header from "./components/header/Header";

export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="o-container">
                    { this.props.children }
                </div>
            </div>
        );
    }

}
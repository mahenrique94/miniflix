import React, { Component } from 'react';
import './App.css';

import Header from "./components/app/header/Header";

export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }

}
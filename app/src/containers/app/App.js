import React, { Component } from "react";

import Header from "../../components/app/header/Header";

import './App.css';

export default class Home extends Component {

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
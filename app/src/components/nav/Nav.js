import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {

    render() {
        return (
            <nav>
                <h1>Miniflix</h1>
                <ul>
                    <li><a href="#">Link 1</a></li>
                </ul>
            </nav>
        );
    }

}
import React, { Component } from "react";

import Menu from "./../menu/Menu";

import "./Header.css";

export default class Header extends Component {

    render() {
        return(
            <header className="mf-header">
                <Menu/>
            </header>
        );
    }

}
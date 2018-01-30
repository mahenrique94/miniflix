import React, { Component } from "react";
import "./Header.css";

import Menu from "../menu/Menu";

export default class Header extends Component {

    render() {
        return(
            <header className="c-header">
                <Menu/>
            </header>
        );
    }

}
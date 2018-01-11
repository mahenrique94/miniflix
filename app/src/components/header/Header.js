import React, { Component } from "react";
import "./Header.css";

import Nav from "../nav/Nav";

export default class Header extends Component {

    render() {
        return(
            <header>
                <Nav/>
            </header>
        );
    }

}
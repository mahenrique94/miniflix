import React, { Component } from "react";

import Menu from "./Menu";

export default class Header extends Component {

    render() {
        return(
            <header className="mf-header">
                <Menu/>
            </header>
        );
    }

}
import React, { Component } from "react";

import Menu from "./Menu";
import Stats from "./Stats";

export default class Header extends Component {

    render() {
        return (
            <header className="pl-header">
                <Menu/>
                <Stats/>
            </header>
        );
    }

}
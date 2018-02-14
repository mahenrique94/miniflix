import React, { Component } from "react";

import Menu from "./../menu/Menu";
import Stats from "./../stats/Stats";

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
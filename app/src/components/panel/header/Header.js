import React, { Component } from "react";

import Menu from "../menu/Menu";

export default class Header extends Component {

    render() {
        return (
            <header className="pl-header">
                <Menu/>
            </header>
        );
    }

}
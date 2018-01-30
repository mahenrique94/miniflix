import React, { Component } from "react";

export default class Menu extends Component {

    render() {
        return (
            <nav className="pl-menu">
                <ul className="pl-menu__list">
                    <li className="pl-menu__item"><a className="pl-menu__link" href="#">Medias</a></li>
                </ul>
            </nav>
        );
    }

}
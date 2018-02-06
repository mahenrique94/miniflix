import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Menu.css";

export default class Menu extends Component {

    render() {
        return (
            <nav className="pl-menu">
                <h1 className="pl-menu__title"><NavLink activeClassName="is-active" className="pl-menu__brand" to="/panel"><i className="fab fa-cloudversify pl-menu__icon"></i>Miniflix</NavLink></h1>
                <ul className="pl-menu__list">
                    <li className="pl-menu__item"><NavLink activeClassName="is-active" className="pl-menu__link" to="/panel/medias"><i className="fab fa-centercode pl-menu__icon"></i>Medias</NavLink></li>
                </ul>
            </nav>
        );
    }

}
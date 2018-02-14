import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "./Menu.css";

export default class Menu extends Component {

    render() {
        return (
            <nav className="mf-menu">
                <h1 className="mf-menu__title"><NavLink activeClassName="is-active" className="mf-menu__brand" to="/"><i className="fab fa-cloudversify mf-menu__icon"></i><FormattedMessage id="title.app"/></NavLink></h1>
                <ul className="mf-menu__list">
                    <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/movies"><i className="fab fa-centercode mf-menu__icon"></i><FormattedMessage id="menu.movies"/></NavLink></li>
                    <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/series"><i className="fab fa-audible mf-menu__icon"></i><FormattedMessage id="menu.series"/></NavLink></li>
                    <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/animes"><i className="fas fa-rocket mf-menu__icon"></i><FormattedMessage id="menu.animes"/></NavLink></li>
                </ul>
            </nav>
        );
    }

}
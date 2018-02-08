import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Menu.css";

export default class Menu extends Component {

    render() {
        return (
            <nav className="mf-menu">
                <h1 className="mf-menu__title"><NavLink activeClassName="is-active" className="mf-menu__brand" to="/"><i className="fab fa-cloudversify mf-menu__icon"></i>Miniflix</NavLink></h1>
                <ul className="mf-menu__list">
                    <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/movies"><i className="fab fa-centercode mf-menu__icon"></i>Filmes</NavLink></li>
                    <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/series"><i className="fab fa-audible mf-menu__icon"></i>Séries</NavLink></li>
                    <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/animes"><i className="fas fa-rocket mf-menu__icon"></i>Animes</NavLink></li>
                </ul>
            </nav>
        );
    }

}
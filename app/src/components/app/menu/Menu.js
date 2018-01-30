import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

export default class Menu extends Component {

    render() {
        return (
            <nav className="mf-menu">
                <h1 className="mf-menu__title"><Link className="mf-menu__brand" to="/"><i className="fab fa-cloudversify mf-menu__icon"></i>Miniflix</Link></h1>
                <ul className="mf-menu__list">
                    <li className="mf-menu__item"><Link className="mf-menu__link" to="/movies"><i className="fab fa-centercode mf-menu__icon"></i>Filmes</Link></li>
                    <li className="mf-menu__item"><Link className="mf-menu__link" to="/series"><i className="fab fa-audible mf-menu__icon"></i>Séries</Link></li>
                    <li className="mf-menu__item"><Link className="mf-menu__link" to="/animes"><i className="fas fa-rocket mf-menu__icon"></i>Animes</Link></li>
                </ul>
            </nav>
        );
    }

}
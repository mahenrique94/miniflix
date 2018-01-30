import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {

    render() {
        return (
            <nav className="c-menu">
                <h1 className="c-menu__title"><Link className="c-menu__brand" to="/"><i className="fab fa-cloudversify c-menu__icon"></i>Miniflix</Link></h1>
                <ul className="c-menu__list">
                    <li className="c-menu__item"><Link className="c-menu__link" to="/movies"><i className="fab fa-centercode c-menu__icon"></i>Filmes</Link></li>
                    <li className="c-menu__item"><Link className="c-menu__link" to="/series"><i className="fab fa-audible c-menu__icon"></i>Séries</Link></li>
                    <li className="c-menu__item"><Link className="c-menu__link" to="/animes"><i className="fas fa-rocket c-menu__icon"></i>Animes</Link></li>
                </ul>
            </nav>
        );
    }

}
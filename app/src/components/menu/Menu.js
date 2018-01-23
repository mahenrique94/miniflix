import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {

    render() {
        return (
            <nav className="c-menu">
                <h1 className="c-menu__title"><a className="c-menu__brand" href=""><i className="fab fa-cloudversify c-menu__icon"></i>Miniflix</a></h1>
                <ul className="c-menu__list">
                    <li className="c-menu__item"><a className="c-menu__link" href="#"><i className="fab fa-centercode c-menu__icon"></i>Filmes</a></li>
                    <li className="c-menu__item"><a className="c-menu__link" href="#"><i className="fab fa-audible c-menu__icon"></i>Séries</a></li>
                    <li className="c-menu__item"><a className="c-menu__link" href="#"><i className="fas fa-rocket c-menu__icon"></i>Animes</a></li>
                </ul>
            </nav>
        );
    }

}
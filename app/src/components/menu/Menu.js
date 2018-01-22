import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {

    render() {
        return (
            <nav class="c-menu">
                <h1 class="c-menu__brand">Miniflix</h1>
                <ul class="c-menu__list">
                    <li class="c-menu__item"><a class="c-menu__link" href="#">Filmes</a></li>
                    <li class="c-menu__item"><a class="c-menu__link" href="#">Séries</a></li>
                    <li class="c-menu__item"><a class="c-menu__link" href="#">Animes</a></li>
                </ul>
            </nav>
        );
    }

}
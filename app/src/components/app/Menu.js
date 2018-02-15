import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { i18n } from "./../../helpers/i18n";

export default class Menu extends Component {

    render() {
        return (
            <nav className="mf-menu">
                <h1 className="mf-menu__title"><NavLink activeClassName="is-active" className="mf-menu__brand" to="/"><i className="fab fa-cloudversify mf-menu__icon"></i>{ i18n.message("title.app") }</NavLink></h1>
                <div className="mf-menu__wrap">
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/movies"><i className="fab fa-centercode mf-menu__icon"></i>{ i18n.message("menu.movies") }</NavLink></li>
                        <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/series"><i className="fab fa-audible mf-menu__icon"></i>{ i18n.message("menu.series") }</NavLink></li>
                        <li className="mf-menu__item"><NavLink activeClassName="is-active" className="mf-menu__link" to="/animes"><i className="fas fa-rocket mf-menu__icon"></i>{ i18n.message("menu.animes") }</NavLink></li>
                    </ul>
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item"><NavLink className="mf-menu__link" to="/panel"><i className="fas fa-cogs mf-menu__icon"></i>{ i18n.message("menu.panel") }</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }

}
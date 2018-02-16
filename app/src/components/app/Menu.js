import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { i18n } from "./../../helpers/i18n";

export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {hide : false};
        this.dropdown = this.dropdown.bind(this);
    }

    render() {
        return (
            <nav className="mf-menu">
                <h1 className="mf-menu__title"><NavLink activeClassName="is-active" className="mf-menu__brand" to="/"><i className="fab fa-cloudversify mf-menu__icon"></i>{ i18n.message("title.app") }</NavLink></h1>
                <div className="mf-menu__wrap">
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item has-dropdown">
                            <button className="mf-menu__link" onClick={ this.dropdown } type="button"><i className="fas fa-bars mf-menu__icon no-margin"></i></button>
                            
                        </li>
                    </ul>
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item"><NavLink className="mf-menu__link" to="/panel"><i className="fas fa-cogs mf-menu__icon"></i>{ i18n.message("menu.panel") }</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }

    dropdown() {
        this.setState({hide : !this.state.hide});
    }

}
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { i18n } from "./../../helpers/i18n";

export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu: false,
            hide : true
        };
        this.dropdown = this.dropdown.bind(this);
    }

    render() {
        return (
            <nav className="mf-menu">
                <h1 className="mf-menu__title"><NavLink activeClassName="is-active" className="mf-menu__brand" to="/"><i className="fab fa-cloudversify mf-menu__icon"></i>{ i18n.message("title.app") }</NavLink></h1>
                <div className="mf-menu__wrap">
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item has-dropdown">
                            <button className={`mf-menu__link ${ this.state.activeMenu ? "is-active" : "" }`} onClick={ this.dropdown } type="button"><i className="fas fa-bars mf-menu__icon no-margin"></i></button>
                            <ul className={ `mf-menu__sub___list ${ this.state.hide ? "is-hide" : "is-show" }` }>
                                <div className="mf-menu__sub___info">
                                    <h2 className="mf-menu__sub___title">
                                        <i className="fab fa-buromobelexperte mf-menu__sub___icon"></i>
                                        <span className="mf-menu__sub___text">{ i18n.message("menu.cattegories") }</span>
                                    </h2>
                                </div>
                                <div className="mf-menu__sub___itens">
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/action">{ i18n.message("menu.action") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/comedy">{ i18n.message("menu.comedy") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/horror">{ i18n.message("menu.horror") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/romance">{ i18n.message("menu.romance") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/thriller">{ i18n.message("menu.thriller") }</Link></li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item"><NavLink className="mf-menu__link" to="/panel"><i className="fas fa-cogs mf-menu__icon"></i>{ i18n.message("menu.panel") }</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }

    dropdown(event) {
        this.setState({
            activeMenu : !this.state.activeMenu,
            hide : !this.state.hide
        });
    }

}
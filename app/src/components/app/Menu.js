import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import I18nHelper from "../../helpers/I18nHelper";

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
                <h1 className="mf-menu__title"><NavLink activeClassName="is-active" className="mf-menu__brand" to="/"><i className="fab fa-cloudversify mf-menu__icon"></i>{ I18nHelper.translate("title.app") }</NavLink></h1>
                <div className="mf-menu__wrap">
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item has-dropdown">
                            <button className={`mf-menu__link ${ this.state.activeMenu ? "is-active" : "" }`} onClick={ this.dropdown } type="button"><i className="fas fa-bars mf-menu__icon no-margin"></i></button>
                            <ul className={ `mf-menu__sub___list ${ this.state.hide ? "is-hide" : "is-show" }` }>
                                <div className="mf-menu__sub___info">
                                    <h2 className="mf-menu__sub___title">
                                        <i className="fab fa-buromobelexperte mf-menu__sub___icon"></i>
                                        <span className="mf-menu__sub___text">{ I18nHelper.translate("menu.cattegories") }</span>
                                    </h2>
                                </div>
                                <div className="mf-menu__sub___itens">
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/action">{ I18nHelper.translate("menu.action") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/comedy">{ I18nHelper.translate("menu.comedy") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/horror">{ I18nHelper.translate("menu.horror") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/romance">{ I18nHelper.translate("menu.romance") }</Link></li>
                                    <li className="mf-menu__subItem"><Link className="mf-menu__sub___link" to="/cattegory/thriller">{ I18nHelper.translate("menu.thriller") }</Link></li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item"><NavLink className="mf-menu__link" to="/panel"><i className="fas fa-cogs mf-menu__icon"></i>{ I18nHelper.translate("menu.panel") }</NavLink></li>
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
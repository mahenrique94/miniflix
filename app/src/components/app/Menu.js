import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import I18nHelper from "../../helpers/I18nHelper";

import StyledMenu from "../menu/Menu";
import MenuItem from "../menu/MenuItem";
import MenuList from "../menu/MenuList";
import MenuTitle from "../menu/MenuTitle";
import MenuWrap from "../menu/MenuWrap";

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
            <StyledMenu>
                <MenuTitle/>
                <MenuWrap>
                    <MenuList>
                        <MenuItem dropdown>
                            <button className={`mf-menu__link ${ this.state.activeMenu ? "is-active" : "" }`} onClick={ this.dropdown } type="button"><i className="fas fa-bars mf-menu__icon no-margin"/></button>
                            <MenuList hide={ this.state.hide } sub>
                                <div className="mf-menu__sub___info">
                                    <h2 className="mf-menu__sub___title">
                                        <i className="fab fa-buromobelexperte mf-menu__sub___icon"></i>
                                        <span className="mf-menu__sub___text">{ I18nHelper.translate("menu.cattegories") }</span>
                                    </h2>
                                </div>
                                <div className="mf-menu__sub___itens">
                                    <MenuItem sub><Link className="mf-menu__sub___link" to="/cattegory/action">{ I18nHelper.translate("menu.action") }</Link></MenuItem>
                                    <MenuItem sub><Link className="mf-menu__sub___link" to="/cattegory/comedy">{ I18nHelper.translate("menu.comedy") }</Link></MenuItem>
                                    <MenuItem sub><Link className="mf-menu__sub___link" to="/cattegory/horror">{ I18nHelper.translate("menu.horror") }</Link></MenuItem>
                                    <MenuItem sub><Link className="mf-menu__sub___link" to="/cattegory/romance">{ I18nHelper.translate("menu.romance") }</Link></MenuItem>
                                    <MenuItem sub><Link className="mf-menu__sub___link" to="/cattegory/thriller">{ I18nHelper.translate("menu.thriller") }</Link></MenuItem>
                                </div>
                            </MenuList>
                        </MenuItem>
                    </MenuList>
                    <ul className="mf-menu__list">
                        <li className="mf-menu__item"><NavLink className="mf-menu__link" to="/panel"><i className="fas fa-cogs mf-menu__icon"></i>{ I18nHelper.translate("menu.panel") }</NavLink></li>
                    </ul>
                </MenuWrap>
            </StyledMenu>
        );
    }

    dropdown(event) {
        this.setState({
            activeMenu : !this.state.activeMenu,
            hide : !this.state.hide
        });
    }

}
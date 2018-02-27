import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import I18nHelper from "./../../helpers/I18nHelper";

import Breadcrumb from "./Breadcrumb";

export default class NavBar extends Component {

    static defaultProps = {
        type : "form"
    };

    static propTypes = {
        collection : PropTypes.string.isRequired,
        type : PropTypes.string.isRequired
    };

    render() {
        return(
            <div className="pl-navbar">
                <Breadcrumb title={ this.props.collection }/>
                { this.createButtons() }
            </div>
        );
    }

    createButtons() {
        if (this.props.type === "list") {
            return (<Link className="pl-navbar__link pl-navbar__link--new" to={`/panel/${this.props.collection}/new`}><i className="fas fa-plus pl-navbar__icon"></i>{ I18nHelper.message("button.new") }</Link>);
        }
    }

}
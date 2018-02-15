import React, { Component } from "react";
import { Link } from "react-router-dom";
import { i18n } from "./../../helpers/i18n";
import PropTypes from "prop-types";

import Breadcrumb from "./Breadcrumb";

export default class NavBar extends Component {

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
            return (<Link className="pl-navbar__link pl-navbar__link--new" to={`/panel/${this.props.collection}/new`}><i className="fas fa-plus pl-navbar__icon"></i>{ i18n.message("button.new") }</Link>);
        }
    }

}

NavBar.defaultProps = {

    type : "form"

}

NavBar.propTypes = {

    collection : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired

}
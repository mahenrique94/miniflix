import React, { Component } from "react";
import { i18n } from "./../../helpers/i18n";
import PropTypes from "prop-types";

export default class Breadcrumb extends Component {

    render() {
        return(
            <div className="pl-breadcrumb">
                <span className="pl-breadcrumb__title">{ i18n.message(`menu.${this.props.title}`) }</span>
            </div>
        );
    }

}

Breadcrumb.propTypes = {

    title : PropTypes.string.isRequired
    
}
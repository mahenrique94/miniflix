import React, { Component } from "react";
import PropTypes from "prop-types";

import I18nHelper from "./../../helpers/I18nHelper";

export default class Breadcrumb extends Component {

    static propTypes = {
        title : PropTypes.string.isRequired
    };

    render() {
        return(
            <div className="pl-breadcrumb">
                <span className="pl-breadcrumb__title">{ I18nHelper.translate(`menu.${this.props.title}`) }</span>
            </div>
        );
    }

}
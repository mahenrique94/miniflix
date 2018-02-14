import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import "./Breadcrumb.css";

export default class Breadcrumb extends Component {

    render() {
        return(
            <div className="pl-breadcrumb">
                <span className="pl-breadcrumb__title"><FormattedMessage id={ `menu.${this.props.title}` }/></span>
            </div>
        );
    }

}
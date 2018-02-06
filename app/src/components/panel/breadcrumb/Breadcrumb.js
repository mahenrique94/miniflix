import React, { Component } from "react";

import "./Breadcrumb.css";

export default class Breadcrumb extends Component {

    render() {
        return(
            <div className="pl-breadcrumb">
                <span className="pl-breadcrumb__title">{ this.props.title }</span>
            </div>
        );
    }

}
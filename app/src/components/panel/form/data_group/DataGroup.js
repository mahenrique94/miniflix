import React, { Component } from "react";
import { Field } from "react-final-form";

import "./DataGroup.css";

export default class DataGroup extends Component {

    render() {
        return(
            <div className="pl-form__group">
                <Field className="pl-form__groupData" { ...this.props }/>
                <span className="pl-form__groupElement"><i className={ `pl-form__groupIcon ${this.props.icon}` }></i></span>
            </div>
        );
    }

}
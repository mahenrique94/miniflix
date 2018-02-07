import React, { Component } from "react";
import { Field } from "redux-form";

import "./Data.css";

export default class Input extends Component {

    render() {
        return(
            <div className="pl-form__group">
                <label className="pl-form__text" htmlFor={ this.props.id }>{ this.props.name }</label>
                <Field className="pl-form__data" { ...this.props } />
            </div>
        );
    }

}
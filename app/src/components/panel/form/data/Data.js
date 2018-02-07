import React, { Component } from "react";
import { Field } from "react-final-form";

import "./Data.css";

export default class Input extends Component {

    render() {
        return( this.checkDatType() );
    }

    checkDatType() {
        if (this.props.type !== "hidden") {
            return (<div className="pl-form__group">
                <label className="pl-form__text" htmlFor={ this.props.id }>{ this.props.name }</label>
                <Field className="pl-form__data" { ...this.props } />
            </div>);
        }
        return <Field className="pl-form__data" { ...this.props } />;
    }

}
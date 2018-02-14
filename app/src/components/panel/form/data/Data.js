import React, { Component } from "react";
import { Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import "./Data.css";

export default class Data extends Component {

    render() {
        return( this.checkDataType() );
    }

    checkDataType() {
        if (this.props.type !== "hidden") {
            return (<div className="pl-form__group">
                <label className="pl-form__text" htmlFor={ this.props.id }><FormattedMessage id={ `label.${this.props.name}` }/></label>
                <Field className="pl-form__data" { ...this.props } />
            </div>);
        }
        return <Field className="pl-form__data" { ...this.props } />;
    }

}

Data.propTypes = {

    autoFocus : PropTypes.bool,
    component : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    max : PropTypes.string,
    maxLength : PropTypes.string,
    min : PropTypes.string,
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired

}
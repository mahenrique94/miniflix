import React, { Component } from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";

export default class DataGroup extends Component {

    static propTypes = {
        autoFocus : PropTypes.bool,
        component : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        max : PropTypes.string,
        maxLength : PropTypes.string,
        min : PropTypes.string,
        name : PropTypes.string.isRequired,
        type : PropTypes.string.isRequired
    };

    render() {
        return(
            <div className="pl-form__group">
                <Field className="pl-form__groupData" { ...this.props }/>
                <span className="pl-form__groupElement"><i className={ `pl-form__groupIcon ${this.props.icon}` }></i></span>
            </div>
        );
    }

}
import React, { Component } from "react";
import { Field } from "react-final-form";
import PropTypes from "prop-types";
import styled from "styled-components";

class FormData extends Component {

    static defaultProps = {
        autoFocus : false,
        required : false
    };

    static propTypes = {
        autoFocus : PropTypes.bool,
        className : PropTypes.string.isRequired,
        component : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        max : PropTypes.string,
        maxLength : PropTypes.string,
        min : PropTypes.string,
        name : PropTypes.string.isRequired,
        required : PropTypes.bool,
        type : PropTypes.string.isRequired
    };

    render() {
        return <Field className={ this.props.className } { ...this.props }/>;
    }

}

const StyledFormData = styled(FormData)`
    border: 1px solid #DCDCDC;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    box-sizing: border-box;
    color: #595959;
    font-weight: 100;
    padding: 1rem;
    width: 100%;
    &:focus {
        box-shadow: 0 0 3px rgba(51, 204, 255, 2);
        border: 1px solid #0099FF;
        outline: none;
    }
`;

export default StyledFormData;
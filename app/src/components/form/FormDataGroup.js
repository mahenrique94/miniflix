import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FormData from "./FormData";
import FormGroup from "./FormGroup";
import FormGroupElement from "./FormGroupElement";
import FormGroupIcon from "./FormGroupIcon";

class FormDataGroup extends Component {

    static defaultProps = {
        autoFocus : false,
        required : false
    };

    static propTypes = {
        autoFocus : PropTypes.bool,
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
        return(
            <FormGroup>
                <FormData { ...this.props }/>
                <FormGroupElement><FormGroupIcon icon={ this.props.icon }/></FormGroupElement>
            </FormGroup>
        );
    }

}

const StyledFormDataGroup = styled(FormDataGroup)``;

export default StyledFormDataGroup;
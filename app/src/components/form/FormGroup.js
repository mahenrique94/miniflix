import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class FormGroup extends Component {

    static propTypes = {
        children : PropTypes.any.isRequired,
        className : PropTypes.string.isRequired
    };

    render() {
        return <div className={ this.props.className }>{ this.props.children }</div>;
    }

}

const StyledFormGroup = styled(FormGroup)`
    display: table;
    width: 100%;
`;

export default StyledFormGroup;
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class FormGroupElement extends Component {

    static propTypes = {
        children : PropTypes.any.isRequired,
        className : PropTypes.string.isRequired
    };

    render() {
        return <div className={ this.props.className }>{ this.props.children }</div>;
    }

}

const StyledFormGroupElement = styled(FormGroupElement)`
    background: #FDFDFD;
    border: 1px solid #DCDCDC;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #333333;
    display: table-cell;
    padding: .9rem 1.5rem;
    width: 1%;
`;

export default StyledFormGroupElement;
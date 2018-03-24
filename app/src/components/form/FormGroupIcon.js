import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class FormGroupIcon extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired,
    };

    render() {
        return <i className={ `${this.props.className} ${this.props.icon}` }/>;
    }

}

const StyledFormGroupIcon = styled(FormGroupIcon)`
    display: table;
    width: 100%;
`;

export default StyledFormGroupIcon;
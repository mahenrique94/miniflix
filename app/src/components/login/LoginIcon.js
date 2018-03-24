import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class LoginIcon extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired
    };

    render() {
        return <i className={ `${this.props.className} ${this.props.icon}` }/>;
    }

}

const StyledLoginIcon = styled(LoginIcon)`
    margin-right: .5rem;
`;

export default StyledLoginIcon;
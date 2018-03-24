import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import I18nHelper from "../../helpers/I18nHelper";

import LoginIcon from "./LoginIcon";

class LoginButton extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired
    };

    render() {
        return <button className={ this.props.className } type="submit"><LoginIcon icon="fas fa-sign-in-alt"/>{ I18nHelper.translate("button.login") }</button>;
    }

}

const StyledLoginButton = styled(LoginButton)`
    background: #00CC99;
    border: none;
    color: #FDFDFD;
    display: block;
    margin-top: 1.5rem;
    padding: .75rem;
    transition: all .2s ease-in-out;
    width: 100%;
    &:hover {
        background: #009973;
    }
`;

export default StyledLoginButton;
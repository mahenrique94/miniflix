import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import I18nHelper from "../../helpers/I18nHelper";

import LoginIcon from "./LoginIcon";

class LoginFeedback extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired,
        error : PropTypes.string.isRequired,
    };

    render() {
        return <div className={ this.props.className }><LoginIcon icon="fas fa-exclamation-triangle"/>{ I18nHelper.translate(this.props.error) }</div>;
    }

}

const StyledLoginFeedback = styled(LoginFeedback)`
    background: #FF8080;
    border: #FF4D4D;
    border-radius: 5px;
    color: #FDFDFD;
    font-family: Arial, sans-serif;
    padding: 1rem;
    text-align: center;
`;

export default StyledLoginFeedback;
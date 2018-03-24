import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class LoginForm extends Component {

    static defaultProps = {
        autoComplete : "off"
    };

    static propTypes = {
        autoComplete : PropTypes.string,
        children : PropTypes.any.isRequired,
        className : PropTypes.string.isRequired,
        onSubmit : PropTypes.func.isRequired
    };

    render() {
        return (
            <form {  ...this.props }>
                { this.props.children }
            </form>
        );
    }

}

const StyledLoginForm = styled(LoginForm)`
    clear: left;
`;

export default StyledLoginForm;

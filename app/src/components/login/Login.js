import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Login extends Component {

    static propTypes = {
        children : PropTypes.any.isRequired,
        className : PropTypes.string.isRequired
    };

    render() {
        return (
            <section className={ this.props.className }>
                { this.props.children }
            </section>
        );
    }

}

const StyledLogin = styled(Login)`
    align-items: center;
    background: #333333;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: absolute;
    width: 100vw;
`;

export default StyledLogin;

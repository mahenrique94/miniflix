import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class LoginPanel extends Component {

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

const StyledLoginPanel = styled(LoginPanel)`
    background: #FDFDFD;
    border: 1px solid #DCDCDC;
    border-radius: 12px;
    display: inline-block;
    padding: 1.5rem;
    width: 400px;
`;

export default StyledLoginPanel;

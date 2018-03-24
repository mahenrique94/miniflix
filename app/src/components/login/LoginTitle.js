import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Brand from "../brand/Brand";

class LoginTitle extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired
    };

    render() {
        return (
            <section className={ this.props.className }>
                <Brand/>
            </section>
        );
    }

}

const StyledLoginTitle = styled(LoginTitle)`
    float: left;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: lowercase;
    width: 100%;
`;

export default StyledLoginTitle;

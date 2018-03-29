import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Brand from "../brand/Brand";

class MenuBrand extends Component {

    static propTypes = {
        className : PropTypes.string.isRequired
    };

    render() {
        return (
            <NavLink className={ this.props.className } to="/">
                <Brand/>
            </NavLink>
        );
    }

}

const StyledMenuBrand = styled(MenuBrand)`
    color: #F2F2F2;
    display: block;
    font-family: Arial, sans-serif;
    margin-right: 1rem;
    text-decoration: none;
    text-transform: lowercase;
    transition: all .2s linear;
    white-space: nowrap;
    &:hover {
        color: $color-text;
        transform: scale(1.2);
    }
`;

export default StyledMenuBrand;
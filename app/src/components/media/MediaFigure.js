import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class MediaFigure extends Component {

    static propTypes = {
        children : PropTypes.any.isRequired,
        className : PropTypes.string.isRequired
    };

    render() {
        return <figure className={ this.props.className }>{ this.props.children }</figure>;
    }

}

const SyledMediaFigure = styled(MediaFigure)`
    background-color: rgba(0, 0, 0, .5);
    background-position: center;
    background-size: cover;
    height: 270px;
    position: relative;
    width: 100%;
`;

export default SyledMediaFigure;
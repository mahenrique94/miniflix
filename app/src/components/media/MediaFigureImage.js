import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class MediaFigureImage extends Component {

    static propTypes = {
        alt : PropTypes.string.isRequired,
        className : PropTypes.string.isRequired,
        src : PropTypes.string.isRequired
    };

    render() {
        return <img alt={ this.props.alt } className={ this.props.className } src={ this.props.src }/>;
    }

}

const StyledMediaFigureImage = styled(MediaFigureImage)`
    filter: brightness(50%) grayscale(1);
    height: 100%;
    width: 100%;
`;

export default StyledMediaFigureImage;
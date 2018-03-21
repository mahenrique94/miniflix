import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class MediaFigureCaption extends Component {

    static propTypes = {
        caption : PropTypes.string.isRequired
    };

    render() {
        return(
            <figcaption className={ this.props.className }>{ this.props.caption }</figcaption>
        );
    }

}

const StyledMediaFigureCaption = styled(MediaFigureCaption)`
    bottom: 1.5rem;
    color: #FFFFFF;
    display: block;
    font-size: 1.6rem;
    font-weight: bold;
    left: 2rem;
    position: absolute;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, .7);
`;

export default StyledMediaFigureCaption;
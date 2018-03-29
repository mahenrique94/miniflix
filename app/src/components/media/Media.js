import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import config from "./../../config";

import AuthHelper from "./../../helpers/AuthHelper";

import MediaFigure from "./MediaFigure";
import MediaFigureCaption from "./MediaFigureCaption";
import MediaFigureImage from "./MediaFigureImage";
import MediaLink from "./MediaLink";

class Media extends Component {

    static propTypes = {
        describe : PropTypes.string.isRequired,
        slug : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired
    };

    render() {
        return(
            <div className={ this.props.className }>
                <MediaLink to={ `/detail/${this.props.slug}` }>
                    <MediaFigure>
                        <MediaFigureImage alt={ this.props.title } src={ `${config.API_URL}/file/download/${this.props.image}?token=${AuthHelper.getToken()}` }/>
                        <MediaFigureCaption caption={ this.props.title }/>
                    </MediaFigure>
                </MediaLink>
            </div>
        );
    }

}

const StyledMedia = styled(Media)`
    background: #FDFDFD;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);
    display: inline-block;
    margin-bottom: 3rem;
    margin-right: 1.5rem;
    transition: all .15s linear;
    width: calc(33.33% - 18px);
    &:nth-child(3n) {
        margin-right: 0;
    }
    &:hover {
        transform: translateY(-12px);
    }
    &:hover ${MediaFigureImage} {
        filter: brightness(70%) grayscale(0);
    }
`;

export default StyledMedia;
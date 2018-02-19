import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import config from "./../../config";

export default class Media extends Component {

    render() {
        return(
            <div className="mf-media">
                <Link className="mf-media__link" to={ `/detail/${this.props.slug}` }>
                    <figure className="mf-media__figure">
                        <img alt={ this.props.title } className="mf-media__picture" src={ `${config.API_URL}/file/download/${this.props.image}?token=${sessionStorage.getItem("access-token")})` }/>
                        <figcaption className="mf-media__title">{ this.props.title }</figcaption>
                    </figure>
                </Link>
            </div>
        );
    }

}

Media.propTypes = {

    describe : PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
    
}
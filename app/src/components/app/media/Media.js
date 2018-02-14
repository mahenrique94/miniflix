import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import "./Media.css";

export default class Media extends Component {

    render() {
        return(
            <div className="mf-media">
                <header className="mf-media__header">
                    <div className="mf-media__picture" style={{ backgroundImage : `url(http://localhost:3000/miniflix/api/file/download/${this.props.image}?token=${sessionStorage.getItem("access-token")})` }}></div>
                    <Link className="mf-media__title" to={ `/detail/${this.props.slug}` }>{ this.props.title }</Link>
                </header>
                <section className="mf-media__content">{ this.props.describe }</section>
                <footer className="mf-media__footer">
                    <Link className="mf-media__link" to={ `/detail/${this.props.slug}` }><i className="fa fa-eye mf-media__icon"></i><FormattedMessage id="button.view"/></Link>
                </footer>
            </div>
        );
    }

}

Media.propTypes = {

    describe : PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
    
}
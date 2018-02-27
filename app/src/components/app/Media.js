import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import config from "./../../config";

import AuthHelper from "./../../helpers/AuthHelper";
import I18nHelper from "./../../helpers/I18nHelper";

export default class Media extends Component {

    static propTypes = {
        describe : PropTypes.string.isRequired,
        slug : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired
    };

    render() {
        return(
            <div className="mf-media">
                <header className="mf-media__header">
                    <div className="mf-media__picture" style={{ backgroundImage : `url(${config.API_URL}/file/download/${this.props.image}?token=${AuthHelper.getToken()})` }}></div>
                    <Link className="mf-media__title" to={ `/detail/${this.props.slug}` }>{ this.props.title }</Link>
                </header>
                <section className="mf-media__content">{ this.props.describe }</section>
                <footer className="mf-media__footer">
                    <Link className="mf-media__link" to={ `/detail/${this.props.slug}` }><i className="fa fa-eye mf-media__icon"></i>{ I18nHelper.message("button.view") }</Link>
                </footer>
            </div>
        );
    }

}
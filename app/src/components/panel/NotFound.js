import React, { Component } from "react";
import { Link } from "react-router-dom";
import I18nHelper from "./../../helpers/I18nHelper";

export default class NotFound extends Component {

    constructor(props) {
        super(props);

        this.checkLink = this.checkLink.bind(this);
    }

    render() {
        return(
            <section className="pl-notFound">
                <h1 className="pl-notFound__title">{ I18nHelper.message("message.page.not.found") }</h1>
                <Link className="pl-notFound__link" to={ this.checkLink() }><i className="fas fa-home pl-notFound__icon"></i>{ I18nHelper.message("button.return.home") }</Link>
            </section>
        );
    }

    checkLink() {
        return this.props.match.url.indexOf("panel") > 0 ? "/panel" : "/";
    }

}
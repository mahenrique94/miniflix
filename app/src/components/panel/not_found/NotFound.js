import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import "./NotFound.css";

export default class NotFound extends Component {

    render() {
        return(
            <section className="pl-notFound">
                <h1 className="pl-notFound__title"><FormattedMessage id="message.page.not.found"/></h1>
                <Link className="pl-notFound__link" to="/panel"><i className="fas fa-home pl-notFound__icon"></i><FormattedMessage id="button.return.home"/></Link>
            </section>
        );
    }

}
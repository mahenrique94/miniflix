import React, { Component } from "react";
import { Link } from "react-router-dom";
import { i18n } from "./../../../helpers/i18n";

import "./NotFound.css";

export default class NotFound extends Component {

    render() {
        return(
            <section className="pl-notFound">
                <h1 className="pl-notFound__title">{ i18n.message("message.page.not.found") }</h1>
                <Link className="pl-notFound__link" to="/panel"><i className="fas fa-home pl-notFound__icon"></i>{ i18n.message("button.return.home") }</Link>
            </section>
        );
    }

}
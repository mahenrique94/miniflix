import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

export default class NotFound extends Component {

    render() {
        return(
            <section className="pl-notFound">
                <h1 className="pl-notFound__title">Page Not Found</h1>
                <Link className="pl-notFound__link" to="/panel">Return to Dashboard</Link>
            </section>
        );
    }

}
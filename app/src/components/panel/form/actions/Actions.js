import React, { Component } from "react";
import { Link } from "react-router-dom";
import { i18n } from "./../../../../helpers/i18n";
import PropTypes from "prop-types";

import "./Actions.css";

export default class Actions extends Component {

    render() {
        return(
            <div className="pl-form__actions">
                <button className="pl-form__action pl-form__action--save" type="submit"><i className="fas fa-save pl-navbar__icon"></i>{ i18n.message("button.save") }</button>
                <Link className="pl-form__action pl-form__action--cancel" to={`/panel/${this.props.collection}`}><i className="fas fa-times pl-navbar__icon"></i>{ i18n.message("button.cancel") }</Link>
            </div>
        );
    }

}

Actions.propTypes = {

    collection : PropTypes.string.isRequired

}
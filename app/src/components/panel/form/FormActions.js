import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import I18nHelper from "../../../helpers/I18nHelper";

export default class Actions extends Component {

    static propTypes = {
        collection : PropTypes.string.isRequired
    };

    render() {
        return(
            <div className="pl-form__actions">
                <button className="pl-form__action pl-form__action--save" type="submit"><i className="fas fa-save pl-navbar__icon"></i>{ I18nHelper.message("button.save") }</button>
                <Link className="pl-form__action pl-form__action--cancel" to={`/panel/${this.props.collection}`}><i className="fas fa-times pl-navbar__icon"></i>{ I18nHelper.message("button.cancel") }</Link>
            </div>
        );
    }

}
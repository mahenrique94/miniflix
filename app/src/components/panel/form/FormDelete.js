import React, { Component } from "react";
import PropTypes from "prop-types";

import I18nHelper from "../../../helpers/I18nHelper";

export default class Delete extends Component {

    static propTypes = {
        delete : PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
    }

    render() {
        return(
            <button className="pl-table__link pl-table__link--delete" onClick={ this.delete } type="button"><i className="fas fa-trash-alt pl-table__icon"></i>{ I18nHelper.translate("button.delete") }</button>
        );
    }

    delete() {
        if (window.confirm("Do you wish delete the Media?")) {
            this.props.delete(this.props.id);
        }
    }

}
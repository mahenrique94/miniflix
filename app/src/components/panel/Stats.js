import React, { Component } from "react";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import PropTypes from "prop-types";
import config from "./../../config";

import AuthHelper from "./../../helpers/AuthHelper";
import I18nHelper from "./../../helpers/I18nHelper";

import AuthAction from "./../../actions/AuthAction";

class Stats extends Component {

    static propTypes = {
        logout : PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.getUser = this.getUser.bind(this);
    }

    render() {
        return(
            <aside className="pl-stats">
                <ul className="pl-stats__list">
                    <li className="pl-stats__item"><i className="fas fa-user pl-stats__icon"></i>{ this.getUser().name }</li>
                    <li className="pl-stats__item"><button className="pl-stats__button" onClick={ this.props.logout } type="button"><i className="fas fa-sign-out-alt pl-stats__icon"></i>{ I18nHelper.translate("button.logout") }</button></li>
                </ul>
            </aside>
        );
    }

    getUser() {
        return jwt.verify(AuthHelper.getToken(), config.SECRET).payload;
    }

}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(AuthAction.logout())
});

export default connect(null, mapDispatchToProps)(Stats);
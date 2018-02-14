import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import PropTypes from "prop-types";

import { logout } from "../../../actions/auth";

import "./Stats.css";

class Stats extends Component {

    constructor(props) {
        super(props);

        this.getUser = this.getUser.bind(this);
    }

    render() {
        return(
            <aside className="pl-stats">
                <ul className="pl-stats__list">
                    <li className="pl-stats__item"><i className="fas fa-user pl-stats__icon"></i>{ this.getUser().name }</li>
                    <li className="pl-stats__item"><button className="pl-stats__button" onClick={ this.props.logout } type="button"><i className="fas fa-sign-out-alt pl-stats__icon"></i><FormattedMessage id="button.logout"/></button></li>
                </ul>
            </aside>
        );
    }

    getUser() {
        return jwt.verify(sessionStorage.getItem("access-token"), "chaves").payload;
    }

}

Stats.propTypes = {

    logout : PropTypes.func.isRequired

}

const mapDispatchToProps = dispatch => {

    return {
        logout: () => dispatch(logout())
    }

}

export default connect(null, mapDispatchToProps)(Stats);
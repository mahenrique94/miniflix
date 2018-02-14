import React, { Component } from "react";
import { connect } from "react-redux";
import { Form as ReactForm } from "react-final-form";
import { FormattedMessage, injectIntl } from "react-intl";

import { login } from "./../../../actions/login";

import DataGroup from "./../form/data_group/DataGroup";

import "./Login.css";

class Login extends Component {

    render() {
        return(
            <section className="pl-login">
                <fieldset className="pl-login__panel">
                    <legend className="pl-login__title"><i className="fab fa-cloudversify pl-login__icon"></i><FormattedMessage id="title.app"/></legend>
                    <ReactForm onSubmit={ this.props.login } render={ ({ handleSubmit }) => (
                        <form autoComplete="off" className="pl-login__form" onSubmit={ handleSubmit }>
                            <DataGroup autoFocus className="pl-form__groupData pl-login__data" component="input" icon="fa fa-user" id="username" maxLength="30" name="username" placeholder={ this.props.intl.formatMessage({ id : "placeholder.type.user"}) } required type="text" />
                            <DataGroup className="pl-form__groupData pl-login__data" component="input" icon="fa fa-lock" id="password" maxLength="16" name="password" placeholder={ this.props.intl.formatMessage({ id : "placeholder.type.password"}) } required type="password" />
                            <button className="pl-login__button" type="submit"><i className="fas fa-sign-in-alt pl-login__icon"></i><FormattedMessage id="button.login"/></button>
                        </form>
                    )}/>
                </fieldset>
            </section>
        );
    }

}

const mapDispatchToProps = dispatch => {

    return {
        login : values => dispatch(login(values))
    }

}

export default connect(null, mapDispatchToProps)(injectIntl(Login));
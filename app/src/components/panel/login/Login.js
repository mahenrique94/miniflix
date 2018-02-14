import React, { Component } from "react";
import { connect } from "react-redux";
import { Form as ReactForm } from "react-final-form";
import { FormattedMessage, injectIntl } from "react-intl";

import { login } from "./../../../actions/auth";

import DataGroup from "./../form/data_group/DataGroup";

import "./Login.css";

class Login extends Component {

    constructor(props) {
        super(props);

        this.feedback = this.feedback.bind(this);
    }

    render() {
        return(
            <section className="pl-login">
                <fieldset className="pl-login__panel">
                    <legend className="pl-login__title"><i className="fab fa-cloudversify pl-login__icon"></i><FormattedMessage id="title.app"/></legend>
                    <ReactForm onSubmit={ this.props.login } render={ ({ handleSubmit }) => (
                        <form autoComplete="off" className="pl-login__form" onSubmit={ handleSubmit }>
                            <DataGroup autoFocus className="pl-form__groupData pl-login__data" component="input" icon="fa fa-user" id="username" maxLength="30" name="username" placeholder={ this.props.intl.formatMessage({ id : "placeholder.type.user"}) } required type="text" />
                            <DataGroup className="pl-form__groupData pl-login__data" component="input" icon="fa fa-lock" id="password" maxLength="16" name="password" placeholder={ this.props.intl.formatMessage({ id : "placeholder.type.password"}) } required type="password"/>
                            { this.feedback() }
                            <button className="pl-login__button" type="submit"><i className="fas fa-sign-in-alt pl-login__icon"></i><FormattedMessage id="button.login"/></button>
                        </form>
                    )}/>
                </fieldset>
            </section>
        );
    }

    feedback() {
        if (this.props.message !== "") {
            return <div className="pl-login__feedback"><i className="fas fa-exclamation-triangle pl-login__feedback___icon"></i>{ this.props.message }</div>
        }
    }

}

const mapStateToProps = state => {

    return {
        message : state.message
    }

}

const mapDispatchToProps = dispatch => {

    return {
        login : values => dispatch(login(values))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login));
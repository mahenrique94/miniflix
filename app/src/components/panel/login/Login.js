import React, { Component } from "react";
import { connect } from "react-redux";
import { Form as ReactForm } from "react-final-form";

import { login } from "../../../actions/login";

import DataGroup from "../form/data_group/DataGroup";

import "./Login.css";

class Login extends Component {

    render() {
        return(
            <section className="pl-login">
                <fieldset className="pl-login__panel">
                    <legend className="pl-login__title"><i className="fab fa-cloudversify pl-login__icon"></i>Miniflix</legend>
                    <ReactForm onSubmit={ this.props.login } render={ ({ handleSubmit }) => (
                        <form autoComplete="off" className="pl-login__form" onSubmit={ handleSubmit }>
                            <DataGroup autoFocus className="pl-form__groupData pl-login__data" component="input" icon="fas fa-user-alt" id="user" maxLength="30" name="user" placeholder="User" required type="text" />
                            <DataGroup className="pl-form__groupData pl-login__data" component="input" icon="fas fa-lock-alt" id="password" maxLength="16" name="password" placeholder="Password" required type="password" />
                            <button className="pl-login__button" type="submit"><i className="fa fa- pl-login__icon"></i>Login</button>
                        </form>
                    )}/>
                </fieldset>
            </section>
        );
    }

}

const mapDispatchToProps = dispatch => {

    return {
        login : values => dispatch(login())
    }

}

export default connect(null, mapDispatchToProps)(Login);
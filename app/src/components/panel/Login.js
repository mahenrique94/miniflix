import React, { Component } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Form as ReactForm } from "react-final-form";
import PropTypes from "prop-types";

import AuthAction from "./../../actions/AuthAction";

import StyledLogin from "../login/Login";
import LoginButton from "../login/LoginButton";
import LoginData from "../login/LoginData";
import LoginFeedback from "../login/LoginFeedback";
import LoginForm from "../login/LoginForm";
import LoginPanel from "../login/LoginPanel";
import LoginTitle from "../login/LoginTitle";

class Login extends Component {

    static propTypes = {
        intl : PropTypes.object.isRequired,
        login : PropTypes.func.isRequired,
        error : PropTypes.string
    };

    constructor(props) {
        super(props);

        this.feedback = this.feedback.bind(this);
    }

    render() {
        return(
            <StyledLogin>
                <LoginPanel>
                    <LoginTitle/>
                    <ReactForm onSubmit={ this.props.login } render={ ({ handleSubmit }) => (
                        <LoginForm onSubmit={ handleSubmit }>
                            <LoginData align="center" autoFocus component="input" icon="fa fa-user" id="username" maxLength="30" name="username" placeholder={ this.props.intl.formatMessage({ id : "placeholder.type.user"}) } required type="text" />
                            <LoginData align="center" component="input" icon="fa fa-lock" id="password" maxLength="16" name="password" placeholder={ this.props.intl.formatMessage({ id : "placeholder.type.password"}) } required type="password"/>
                            { this.feedback() }
                            <LoginButton/>
                        </LoginForm>
                    )}/>
                </LoginPanel>
            </StyledLogin>
        );
    }

    feedback() {
        if (this.props.error !== null) {
            return <LoginFeedback error={ this.props.error }/>;
        }
    }

}


const mapStateToProps = state => ({
    error : state.authReducer.error
});

const mapDispatchToProps = dispatch => ({
    login : values => dispatch(AuthAction.login(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login));
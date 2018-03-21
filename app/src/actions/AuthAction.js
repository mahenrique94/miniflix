import * as ActionTypes from "./../constants/ActionTypes";
import { push } from "react-router-redux";
import config from "./../config";

import ActionsHelper from "./../helpers/ActionsHelper";
import AuthHelper from "./../helpers/AuthHelper";

export default class AuthAction {

    static login(data) {
        return async dispatch => {
            fetch(`${config.API_URL}/auth`, {
                method : "POST",
                headers : {
                    "Accept" : "application/json",
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("An error raised on trying to authenticate user from API");
                }
                return response;
            })
            .then(response => response.json())
            .then(response => {
                if (response) {
                    AuthHelper.login(response.token);
                    dispatch(ActionsHelper.dispatch(ActionTypes.AUTH_LOGIN, "messages.auth.login"));
                    dispatch(push("/"));
                }
            })
            .catch(error => {
                dispatch(ActionsHelper.dispatch(ActionTypes.AUTH_LOGIN_ERROR, "error.auth.login"));
                dispatch(push("/panel/login"));
            });

            data.password = "";
        }
    }

    static logout() {
        return async dispatch => {
            AuthHelper.logout();
            dispatch(ActionsHelper.dispatch(ActionTypes.AUTH_LOGOUT, null));
            dispatch(push("/panel/login"));
        }
    }
}


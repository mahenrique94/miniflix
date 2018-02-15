import { push } from "react-router-redux";
import { error, isLoading, message } from "./base";
import config from "./../config";

export function login(values) {
    return dispatch => {
        dispatch(isLoading(true));
        fetch(`${config.API_URL}/auth`, {
            method : "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(values)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("An error raised on trying to authenticate user from API");
            }
            dispatch(isLoading(false));
            return response;
        })
        .then(response => response.json())
        .then(response => {
            if (response) {
                sessionStorage.setItem("access-token", response.token);
                dispatch(push("/"));
            }
        })
        .catch(err => {
            dispatch(message("Usuário ou senha inválidos"));
            dispatch(error(err));
            dispatch(push("/panel/login"));
        });
        
        values.password = "";
        return values;
    }
}

export function logout() {
    return dispatch => {
        sessionStorage.removeItem("access-token");
        dispatch(message(""));
        dispatch(push("/panel/login"));
    }
}
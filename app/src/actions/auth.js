import { push } from "react-router-redux";
import { error, isLoading, message } from "./base";
import config from "./../config";
import axios from "axios";

export function login(values) {
    return dispatch => {
        dispatch(isLoading(true));
        axios(`${config.API_URL}/auth`, {
            method : "POST",
            headers : {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            data : JSON.stringify(values)
        })
        .then(response => {
            if (!response.status === 200) {
                throw new Error("An error raised on trying to authenticate user from API");
            }
            dispatch(isLoading(false));
            sessionStorage.setItem("access-token", response.data.token);
            dispatch(push("/"));;
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
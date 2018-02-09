import { push } from "react-router-redux";
import { error, isLoading } from "./base";

export function login(values) {
    return dispatch => {
        dispatch(isLoading(true));
        fetch("http://localhost:3000/miniflix/api/auth", {
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
                dispatch(push("/panel"));
            }
        })
        .catch(err => {
            dispatch(error(err));
            dispatch(push("/panel/login"));
        });
        return values;
    }
}
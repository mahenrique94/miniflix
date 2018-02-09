import { push } from "react-router-redux";
import { error, isLoading, success } from "./base";

export function login(values) {
    return dispatch => {
        dispatch(push("/panel"));
        return values;
    }
}
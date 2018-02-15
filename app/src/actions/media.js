import { push } from "react-router-redux";
import { error, isLoading, success } from "./base";
import { http } from "./../helpers/http";
import config from "./../config";

const MEDIAS_API_URL = `${config.API_URL}/medias`;
const removeMediaById = (medias, id) => medias.filter(media => media._id !== id);

export function edit(id) {
    return dispatch => {
        dispatch(isLoading(true));
        fetch(`${MEDIAS_API_URL}/${id}`, { headers : http.buildHeaders() })
            .then(response => {
                if (!response.ok) {
                    throw new Error("An error raised on getting media from API");
                }
                dispatch(isLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(media => dispatch(success(media)))
            .catch(err => dispatch(error(err)));
    }
}

export function list() {
    return dispatch => {
        dispatch(isLoading(true));
        fetch(MEDIAS_API_URL, { headers : http.buildHeaders() })
            .then(response => {
                if (!response.ok) {
                    throw new Error("An error raised on getting medias from API");
                }
                dispatch(isLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(medias => dispatch(success(medias)))
            .catch(err => dispatch(error(err)));
    }
}

export function remove(id) {
    return (dispatch, getState) => {
        dispatch(isLoading(true));
        fetch(MEDIAS_API_URL, {
            method : "DELETE",
            headers : http.buildHeaders(),
            body: JSON.stringify({ "_id" : id})
        }).then(response => {
            const medias = getState().success;
            if (!response.ok) {
                throw new Error("An error raised on deleting medias from API");
            }

            dispatch(isLoading(false));
            dispatch(success(removeMediaById(medias, id)));
        }).catch(err => dispatch(error(err)));
    }
}

export function save(values) {
    return dispatch => {
        dispatch(isLoading(true));
        let method = "POST";
        if (values._id) {
            method = "PUT";
        }
        fetch(MEDIAS_API_URL, {
            method : method,
            headers : http.buildHeaders(),
            body: JSON.stringify(values)
        }).then(response => {
            if (!response.ok) {
                throw new Error("An error raised on saving medias from API");
            }
            dispatch(isLoading(false));
            dispatch(push("/panel/medias"));
        }).catch(err => dispatch(error(err)));
    }
}
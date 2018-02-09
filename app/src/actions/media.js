import { push } from "react-router-redux";
import { error, isLoading, success } from "./base";

const headersAuthenticated = {
    "Accept" : "application/json",
    "Content-Type" : "application/json",
    "x-access-token" : sessionStorage.getItem("access-token")
};
const removeMediaById = (medias, id) => medias.filter(media => media._id !== id);

export function edit(id) {
    return dispatch => {
        dispatch(isLoading(true));
        fetch(`http://localhost:3000/miniflix/api/medias/${id}`, headersAuthenticated)
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
    console.log(headersAuthenticated);
    return dispatch => {
        dispatch(isLoading(true));
        fetch("http://localhost:3000/miniflix/api/medias", headersAuthenticated)
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
        fetch("http://localhost:3000/miniflix/api/medias", {
            method : "DELETE",
            headersAuthenticated,
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
        fetch("http://localhost:3000/miniflix/api/medias", {
            method : method,
            headersAuthenticated,
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
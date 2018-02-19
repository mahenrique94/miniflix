import { push } from "react-router-redux";
import * as actions from "./base";
import { http } from "./../helpers/http";
import config from "./../config";
import axios from "axios";

const MEDIAS_API_URL = `${config.API_URL}/medias`;
const removeMediaById = (medias, id) => medias.filter(media => media._id !== id);

export default class MediaAPI {

    static edit(id) {
        return dispatch => {
            dispatch(actions.isLoading(true));
            axios(`${MEDIAS_API_URL}/${id}`, { headers : http.buildHeaders() })
                .then(response => {
                    if (!response.status === 200) {
                        throw new Error("An error raised on getting media from API");
                    }
                    dispatch(actions.isLoading(false));
                    dispatch(actions.edit(response.data));
                }).catch(err => dispatch(actions.error(err)));
        }
    }
    
    static list() {
        return dispatch => {
            dispatch(actions.isLoading(true));
            axios(MEDIAS_API_URL, { headers : http.buildHeaders() })
                .then(response => {
                    if (!response.status === 200) {
                        throw new Error("An error raised on getting medias from API");
                    }
                    dispatch(actions.isLoading(false));
                    dispatch(actions.list(response.data));
                }).catch(err => dispatch(actions.error(err)));
        }
    }
    
    static listBySlug(slug) {
        return dispatch => {
            dispatch(actions.isLoading(true));
            axios(`${MEDIAS_API_URL}/find/${slug}`, { headers : http.buildHeaders() })
                .then(response => {
                    if (!response.status === 200) {
                        throw new Error("An error raised on getting medias from API");
                    }
                    dispatch(actions.isLoading(false));
                    dispatch(actions.edit(response.data));
                }).catch(err => dispatch(actions.error(err)));
        }
    }
    
    static del(id) {
        return (dispatch, getState) => {
            dispatch(actions.isLoading(true));
            axios(MEDIAS_API_URL, {
                method : "DELETE",
                headers : http.buildHeaders(),
                data: JSON.stringify({ "_id" : id})
            }).then(response => {
                const medias = getState().list;
                if (!response.status === 200) {
                    throw new Error("An error raised on deleting medias from API");
                }
    
                dispatch(actions.isLoading(false));
                dispatch(actions.list(removeMediaById(medias, id)));
            }).catch(err => dispatch(actions.error(err)));
        }
    }
    
    static save(values) {
        return dispatch => {
            dispatch(actions.isLoading(true));
            let method = "POST";
            if (values._id) {
                method = "PUT";
            }
            axios(MEDIAS_API_URL, {
                method,
                headers : http.buildHeaders(),
                data: JSON.stringify(values)
            }).then(response => {
                if (!response.status === 200) {
                    throw new Error("An error raised on saving medias from API");
                }
                dispatch(actions.isLoading(false));
                dispatch(actions.edit({}))
                dispatch(push("/panel/medias"));
            }).catch(err => dispatch(actions.error(err)));
        }
    }

}
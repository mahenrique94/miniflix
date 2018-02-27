import * as ActionTypes from "./../constants/ActionTypes";
import { push } from "react-router-redux";
import HTTPHelper from "./../helpers/HTTPHelper";
import config from "./../config";

import ActionsHelper from "./../helpers/ActionsHelper";

const MEDIAS_API_URL = `${config.API_URL}/medias`;
const removeMediaById = (medias, id) => medias.filter(media => media._id !== id);

export default class MediaAction {

    static edit(id) {
        return async dispatch => {
            fetch(`${MEDIAS_API_URL}/${id}`, { headers : HTTPHelper.buildHeaders() })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("An error raised on getting media from API");
                    }
                    return response;
                })
                .then(response => response.json())
                .then(media => dispatch(ActionsHelper.dispatch(ActionTypes.MEDIA_EDIT, media)))
                .catch(error => console.error(error));
        }
    }

    static list() {
        return async dispatch => {
            fetch(MEDIAS_API_URL, { headers : HTTPHelper.buildHeaders() })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("An error raised on getting medias from API");
                    }
                    return response;
                })
                .then(response => response.json())
                .then(medias => dispatch(ActionsHelper.dispatch(ActionTypes.MEDIA_LIST, medias)))
                .catch(error => console.error(error));
        }
    }

    static listBySlug(slug) {
        return async dispatch => {
            fetch(`${MEDIAS_API_URL}/find/${slug}`, { headers : HTTPHelper.buildHeaders() })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("An error raised on getting medias from API");
                    }
                    return response;
                })
                .then(response => response.json())
                .then(media => dispatch(ActionsHelper.dispatch(ActionTypes.MEDIA_LIST_BY_SLUG, media)))
                .catch(error => console.error(error));
        }
    }

    static remove(id) {
        return async (dispatch, getState) => {
            fetch(MEDIAS_API_URL, {
                method : "DELETE",
                headers : HTTPHelper.buildHeaders(),
                body: JSON.stringify({ "_id" : id})
            }).then(response => {
                const medias = getState().mediaReducer.list;
                if (!response.ok) {
                    throw new Error("An error raised on deleting medias from API");
                }
                dispatch(ActionsHelper.dispatch(ActionTypes.MEDIA_DELETE, removeMediaById(medias, id)));
            }).catch(error => console.error(error));
        }
    }

    static save(values) {
        return async dispatch => {
            let method = "POST";
            if (values._id) {
                method = "PUT";
            }
            fetch(MEDIAS_API_URL, {
                method : method,
                headers : HTTPHelper.buildHeaders(),
                body: JSON.stringify(values)
            }).then(response => {
                if (!response.ok) {
                    throw new Error("An error raised on saving medias from API");
                }
                dispatch(push("/panel/medias"));
            }).catch(errror => console.error(errror));
        }
    }

}


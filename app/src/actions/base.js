import * as ActionTypes from "./../constants/ActionTypes";

export function error(error) {
    return {
        type : ActionTypes.ERROR,
        payload : { error }
    }
}

export function isLoading(loading) {
    return {
        type : ActionTypes.IS_LOADING,
        payload : {
            loading : false
        }
    }
}

export function success(data) {
    return {
        type : ActionTypes.SUCCESS,
        payload : { data }
    }
}
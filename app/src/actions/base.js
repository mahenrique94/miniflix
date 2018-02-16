import * as ActionTypes from "./../constants/ActionTypes";

export function edit(data) {
    return {
        type : ActionTypes.EDIT,
        payload : { data }
    }
}

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

export function list(list) {
    return {
        type : ActionTypes.LIST,
        payload : { list }
    }
}

export function message(message) {
    return {
        type : ActionTypes.MESSAGE,
        payload : { message }
    }
}

export function save() {
    return {
        type : ActionTypes.SAVE,
        payload : { }
    }
}
import * as ActionTypes from "./../constants/ActionTypes";

const del = (state = [], action) => {
    if (action.type === ActionTypes.DELETE) {
        return action.payload.list;
    }
    return state;
}

const edit = (state = {}, action) => {
    if (action.type === ActionTypes.EDIT) {
        return action.payload.data;
    }
    return state;
}

const error = (state = "", action) => {
    if (action.type === ActionTypes.ERROR) {
        return action.payload.error;
    }
    return state;
}

const loading = (state = false, action) => {
    if (action.type === ActionTypes.IS_LOADING) {
        return action.payload.loading;
    }
    return state;
}

const list = (state = [], action) => {
    if (action.type === ActionTypes.LIST) {
        return action.payload.list;
    }
    return state;
}

const message = (state = "", action) => {
    if (action.type === ActionTypes.MESSAGE) {
        return action.payload.message;
    }
    return state;
}

export default { del, edit, error, loading, list, message };
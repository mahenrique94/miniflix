import * as Types from "./../constants/ActionTypes";

export function error(state = "", action) {
    if (action.type === Types.ERROR) {
        return action.payload.error;
    }
    return state;
}

export function loading(state = false, action) {
    if (action.type === Types.IS_LOADING) {
        return action.payload.loading;
    }
    return state;
}

export function success(state = [], action) {
    if (action.type === Types.SUCCESS) {
        return action.payload.data;
    }
    return state;
}
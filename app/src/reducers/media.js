import { ERROR, IS_LOADING, SUCCESS } from "../constants";

export function error(state = "", action) {
    if (action.type === ERROR) {
        return action.payload.error;
    }
    return state;
}

export function loading(state = false, action) {
    if (action.type === IS_LOADING) {
        return action.payload.loading;
    }
    return state;
}

export function success(state = [], action) {
    if (action.type === SUCCESS) {
        return action.payload.data;
    }
    return state;
}
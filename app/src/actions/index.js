import { ERROR, IS_LOADING, SUCCESS } from "../constants";

export function error(error) {
    return {
        type : ERROR,
        payload : { error }
    }
}

export function isLoading(loading) {
    return {
        type : IS_LOADING,
        payload : {
            loading : false
        }
    }
}

export function success(data) {
    return {
        type : SUCCESS,
        payload : { data }
    }
}
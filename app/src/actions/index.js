import * as Types from "../constants";

export function error(error) {
    return {
        type : Types.ERROR,
        payload : { error }
    }
}

export function isLoading(loading) {
    return {
        type : Types.IS_LOADING,
        payload : {
            loading : false
        }
    }
}

export function success(data) {
    return {
        type : Types.SUCCESS,
        payload : { data }
    }
}
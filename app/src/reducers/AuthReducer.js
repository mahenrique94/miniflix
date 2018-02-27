import * as ActionTypes from "./../constants/ActionTypes";

export default class AuthReducer {

    static INITIAL_STATE = {
        error : null,
        success : null
    };

    static getState(state = AuthReducer.INITIAL_STATE, action) {
        switch (action.type) {
            case ActionTypes.AUTH_LOGIN : {
                return { ...state, success : action.payload }
            }
            case ActionTypes.AUTH_LOGIN_ERROR : {
                return { ...state, error : action.payload }
            }
            case ActionTypes.AUTH_LOGOUT : {
                return { ...state, error : AuthReducer.INITIAL_STATE.error, success : AuthReducer.INITIAL_STATE.success }
            }
            default : {
                return state;
            }
        }
    }

}
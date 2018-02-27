import * as ActionTypes from "./../constants/ActionTypes";

export default class MediaReducer {

    static INITIAL_STATE = {
        list : [],
        object : {}
    };

    static getState(state = MediaReducer.INITIAL_STATE, action) {
        switch (action.type) {
            case ActionTypes.MEDIA_DELETE : {
                return { ...state, list : action.payload }
            }
            case ActionTypes.MEDIA_EDIT : {
                return { ...state, object : action.payload }
            }
            case ActionTypes.MEDIA_LIST : {
                return { ...state, list : action.payload, object : MediaReducer.INITIAL_STATE.object }
            }
            case ActionTypes.MEDIA_LIST_BY_SLUG : {
                return { ...state, object : action.payload }
            }
            default : {
                return state;
            }
        }
    }

}
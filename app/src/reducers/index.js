import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import AuthReducer from "./AuthReducer";
import MediaReducer from "./MediaReducer";

export default combineReducers({
    authReducer : AuthReducer.getState,
    mediaReducer : MediaReducer.getState,
    router : routerReducer
});
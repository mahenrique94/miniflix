import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { error, loading, success } from "./media";

export default combineReducers({
    router : routerReducer,
    error,
    loading,
    success
});
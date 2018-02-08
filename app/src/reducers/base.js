import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { error, loading, success } from "./generic";

export default combineReducers({
    router : routerReducer,
    error,
    loading,
    success
});
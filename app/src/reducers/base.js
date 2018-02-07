import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import { error, loading, success } from "./media";

export default combineReducers({
    router : routerReducer,
    form : formReducer,
    error,
    loading,
    success
});
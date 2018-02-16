import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import genericReducer from "./generic";

export default combineReducers({
    router : routerReducer,
    ...genericReducer
});
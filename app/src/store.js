import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import reducers from "./reducers/base";

export const history = createHistory({ basename : "miniflix"});

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
);

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

import Medias from './components/app/medias/Medias';
import Dashboard from "./components/panel/dashboard/Dashboard"

import "./assets/css/normalize.css";
import "./assets/css/fontawesome/css/fontawesome-all.min.css";
import './index.css';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route exact path="/">
                    <Switch>
                        <Route component={ Medias } exact path=""></Route>
                    </Switch>
                </Route>
                <Route exact path="/panel">
                    <Switch>
                        <Route component={ Dashboard } exact path=""></Route>
                    </Switch>
                </Route>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
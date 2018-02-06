import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

import Medias from './components/app/medias/list/List';

import Dashboard from "./components/panel/dashboard/Dashboard"
import MediasList from "./components/panel/medias/list/List";
import MediasForm from "./components/panel/medias/form/Form";
import NotFound from "./components/panel/not_found/NotFound";

import "./assets/css/normalize.css";
import "./assets/css/fontawesome/css/fontawesome-all.min.css";
import "./assets/css/reset.css";
import './index.css';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route component={ Medias } exact path="/"/>
                <Route component={ Dashboard } exact path="/panel"/>
                <Route component={ MediasList } exact path="/panel/medias"/>
                <Route component={ MediasForm } exact path="/panel/medias/new"/>
                <Route component={ NotFound }/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

import Medias from './components/app/medias/list/List';

import Dashboard from "./components/panel/dashboard/Dashboard"
import Login from "./components/panel/login/Login";
import MediasList from "./components/panel/medias/list/List";
import MediasForm from "./components/panel/medias/form/Form";
import NotFound from "./components/panel/not_found/NotFound";

import "normalize.css";
import "font-awesome/css/font-awesome.min.css"
import "./assets/css/reset.css";
import './index.css';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route component={ Medias } exact path="/"/>
                <Route component={ Dashboard } exact path="/panel"/>
                <Route component={ Login } exact path="/panel/login"/>
                <Route component={ MediasList } exact path="/panel/medias"/>
                <Route component={ MediasForm } exact path="/panel/medias/new"/>
                <Route component={ MediasForm } exact path="/panel/medias/:id"/>
                <Route component={ NotFound }/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
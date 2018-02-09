import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

import Medias from './components/app/medias/list/List';

import Dashboard from "./components/panel/dashboard/Dashboard"
import Login from "./components/panel/login/Login";
import MediasList from "./components/panel/medias/list/List";
import MediasForm from "./components/panel/medias/form/Form";
import NotFound from "./components/panel/not_found/NotFound";

import "normalize.css";
import "./assets/css/reset.css";
import './index.css';

import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-regular";
import "@fortawesome/fontawesome-free-solid";

const isLogged = () => sessionStorage.getItem("access-token") !== null;

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Switch>
                <Route component={ Login } exact path="/panel/login"/>
                <Route path="*" render={() => {
                    if (isLogged()) {
                        return (
                            <Switch>
                                <Route component={ Medias } exact path="/"/>
                                <Route component={ Dashboard } exact path="/panel"/>
                                <Route component={ MediasList } exact path="/panel/medias"/>
                                <Route component={ MediasForm } exact path="/panel/medias/new"/>
                                <Route component={ MediasForm } exact path="/panel/medias/:id"/>
                                <Route component={ NotFound }/>
                            </Switch>
                        );
                    } else {
                        return <Redirect to="/panel/login"/>
                    }
                }}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
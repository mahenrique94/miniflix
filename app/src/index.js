import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import br from "react-intl/locale-data/pt";
import store, { history } from "./store";

import Medias from './components/app/medias/List';

import Dashboard from "./components/panel/Dashboard";
import Detail from "./components/app/Detail";
import Login from "./components/panel/Login";
import MediasList from "./components/panel/medias/List";
import MediasForm from "./components/panel/medias/Form";
import NotFound from "./components/panel/NotFound";

import "normalize.css";
import "./assets/sass/index.sass";

import "@fortawesome/fontawesome";
import "@fortawesome/fontawesome-free-brands";
import "@fortawesome/fontawesome-free-regular";
import "@fortawesome/fontawesome-free-solid";

import { messages } from "./messages/";

addLocaleData([...en, ...br]);

const isLogged = () => sessionStorage.getItem("access-token") !== null;
const locale = navigator.languages.length ? navigator.languages[0] : navigator.language;
const getMessages = () => messages[locale.split("-")[0]];

ReactDOM.render(
    <IntlProvider locale={ locale } messages={ getMessages() }>
        <Provider store={ store }>
            <ConnectedRouter history={ history }>
                <Switch>
                    <Route component={ Login } exact path="/panel/login"/>
                    <Route path="*" render={() => {
                        if (isLogged()) {
                            return (
                                <Switch>
                                    <Route component={ Medias } exact path="/"/>
                                    <Route component={ Detail } exact path="/detail/:slug"/>
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
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);

registerServiceWorker();
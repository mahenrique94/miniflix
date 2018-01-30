import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

import Home from './components/app/home/Home';

import "./assets/css/normalize.css";
import "./assets/css/fontawesome/css/fontawesome-all.min.css";
import './index.css';

ReactDOM.render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <Home/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
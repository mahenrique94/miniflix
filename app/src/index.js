import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import createHistory from "history/createBrowserHistory";
import store from "./store";

import Home from './components/home/Home';

import "./assets/css/normalize.css";
import "./assets/css/fontawesome/css/fontawesome-all.min.css";
import './index.css';


ReactDOM.render(
    <Provider store={ store }>
        <Router history={ createHistory() }>
            <Route exact path="/">
                <div className="o-app">
                    <Route component={ Home } exact path="/"/>
                </div>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
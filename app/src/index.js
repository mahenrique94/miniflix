import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import createHistory from "history/createBrowserHistory";
import store from "./store";

import App from './App';
import Painel from "./components/painel/Painel";

import "./assets/css/normalize.css";
import "./assets/css/fontawesome/css/fontawesome-all.min.css";
import './index.css';


ReactDOM.render(
    <Provider store={ store }>
        <Router history={ createHistory() }>
            <div>
                <Route path="/" component={ App }/>
                <Route path="/painel" component={ Painel }/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./index.css";
import App from "./layout/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import 'babel-polyfill';
import store from './store';
ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider>, document.getElementById("root"));
serviceWorker.unregister();

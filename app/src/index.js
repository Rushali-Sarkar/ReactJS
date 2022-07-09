import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { configureStore } from "./store.js";
import App from "./app.js";

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>, document.getElementById('root'));
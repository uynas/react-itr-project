import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/redux-store.js'
import {Provider} from "react-redux";

let rerenderEntireTree=()=> ReactDOM.render(
    <Router>
        <Provider store={store}>
    <App />
        </Provider>
    </Router>,
 document.getElementById('root')
);
rerenderEntireTree(store.getState())
//store.subscribe(rerenderEntireTree)

serviceWorker.unregister();

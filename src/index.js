import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <ScrollToTop>
            <App></App>
        </ScrollToTop>
    </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);


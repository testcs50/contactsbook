import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Layout from './layout/Layout';

ReactDOM.render(
    <HashRouter>
        <Provider store={ store }>
            <Layout/>
        </Provider>
    </HashRouter>,
    document.querySelector('#root')
);

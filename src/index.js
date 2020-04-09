import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';

import Layout from './layout/Layout';

ReactDOM.render(
    <HashRouter>
        <Provider store={ store }>
            <PersistGate loading={null} persistor={persistor}>
                <Layout/>
            </PersistGate>
        </Provider>
    </HashRouter>,
    document.querySelector('#root')
);

import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducer from './reducers';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(thunk, promise, logger);
const store = createStore(persistedReducer, middleware);

export default store;
export const persistor = persistStore(store);

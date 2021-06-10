import {applyMiddleware, createStore,compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import RootReducer from './reducer/RootReduser'
import InitialState from './InitialState'
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(thunk, logger),
    // other store enhancers if any
);
export const store=createStore(RootReducer,InitialState, enhancer)
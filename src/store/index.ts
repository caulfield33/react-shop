import {createStore, applyMiddleware } from 'redux'
import {routerMiddleware} from 'connected-react-router'
import rootReducer from "./root-reducer";
import {composeEnhancers} from "./utils";
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./root-saga";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware()

const middlewares = [routerMiddleware(history), sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer(history), {}, enhancer);

sagaMiddleware.run(rootSaga)

export default store;
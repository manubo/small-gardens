import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRoutes, redirect } from 'redux-first-router';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import queryString from 'query-string';
import * as reducers from './modules/reducers';
import routesMap from '../routes';

const history = createHistory();

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = connectRoutes(history, routesMap, {
  notFoundPath: '/not_found',
  querySerializer: queryString,
});

const rootReducer = combineReducers({ ...reducers, location: routerReducer });

const middlewares = [routerMiddleware, thunkMiddleware];

const enhancers = [routerEnhancer];

const composeEnhancers =
  ('development' === process.env.NODE_ENV &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(...enhancers, applyMiddleware(...middlewares))
);

export default store;

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import * as reducers from '../stores';

export default function createAppStore(initialState){
  const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
  )(createStore);

  const reducer = combineReducers(reducers);

  const store = finalCreateStore(reducer, initialState);

  return store;
}

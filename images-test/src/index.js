import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import R from 'ramda';

import appRoutes from './appRoutes';
import createAppStore from './createStore';

const images = R.range(0, 100).map(i => `http://lorempixel.com/g/300/${300 + i}/`);

const initalState = {
  images: fromJS(images)
};

const store = createAppStore(initalState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} children={appRoutes} />
  </Provider>,
  document.getElementById('root')
);

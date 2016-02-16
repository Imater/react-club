import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createHistory } from 'history';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import appRoutes from './appRoutes';
import createAppStore from './createStore';

const initalState = {
  images: fromJS([])
};

const store = createAppStore(initalState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} children={appRoutes} />
  </Provider>,
  document.getElementById('root')
);

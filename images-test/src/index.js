import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createHistory } from 'history';
import appRoutes from './appRoutes';

const history = createHistory();

ReactDOM.render(
  <Router history={browserHistory} children={appRoutes} />,
  document.getElementById('root')
);

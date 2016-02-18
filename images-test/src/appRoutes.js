import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from 'containers/App';
import Items from 'containers/Items.js';
import FullScreen from 'containers/FullScreen';
import Tabs from 'containers/Tabs';
import { Main } from 'components/Main';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='/media/:width/:count' component={Items} />
    <Route path='/fullscreen/:index' component={FullScreen} />
    <Route path='/tabs/:index' component={Tabs} />
  </Route>
);

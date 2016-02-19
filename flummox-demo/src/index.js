import React from 'react';
import ReactDOM from 'react-dom';
import FluxComponent from 'flummox/component';

import AppFlux from './Flux.js';
import App from './containers/App.js';

const flux = new AppFlux();

ReactDOM.render(
    <FluxComponent flux={flux}>
        <App />
    </FluxComponent>,
    document.getElementById('app')
);

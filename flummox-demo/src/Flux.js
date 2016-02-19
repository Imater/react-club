import { Flux } from 'flummox';

import TaskActions from './actions/TaskController.js';
import TaskStore from './stores/TaskStore.js';
import TreeStore from './stores/TreeStore.js';

export default class AppFlux extends Flux {
    
    constructor() {
        super();

        this.createActions('tasks', TaskActions);

        this.createStore('tasks', TaskStore, this);
        this.createStore('trees', TreeStore, this);
    }
}

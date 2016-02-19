import React, { Component } from 'react';
import FluxComponent from 'flummox/component';

import List from '../components/List.js';
import Form from '../components/Form.js';
import Childs from '../components/Childs.js';

export default class App extends Component {
    _handleFormSubmit(newTask) {
        const { createTask } = this.props.flux.getActions('tasks');

        createTask(newTask);
    }

    _handleTaskDelete(index) {
        const { deleteTask } = this.props.flux.getActions('tasks');

        deleteTask(index);
    }

    render() {
        return(
            <div>
                <Form 
                    handleFormSubmit={this._handleFormSubmit.bind(this)} 
                />
                <FluxComponent 
                    connectToStores={['tasks']}
                >
                    <List handleTaskDelete={this._handleTaskDelete.bind(this)}/>
                </FluxComponent>
                <FluxComponent
                    connectToStores={['trees']}
                >
                    <Childs />
                </FluxComponent>
            </div>
        );
    }
}

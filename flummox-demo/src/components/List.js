import React, { Component } from 'react';

export default class List extends Component {
    _handleTaskDelete(index) {
        const { handleTaskDelete } = this.props;

        handleTaskDelete(index);
    }

    render() {
        const { tasks } = this.props;
       
        return(
            <ul>
                {
                    tasks.map((task, index) => {
                        return (
                            <li key={index}>
                                <span 
                                    onClick={this._handleTaskDelete.bind(this, index)}
                                >
                                {"X - "}
                                </span>
                                {task}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

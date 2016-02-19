import React, { Component } from 'react';

export default class Form extends Component {
    state = { 
        inputValue: "Do It!",
    };

    _handleInputChange(event) {
        const inputValue = event.target.value;

        this.setState({
            inputValue,
        });
    }

    _handleFormSubmit(event) {
        const { handleFormSubmit } = this.props;
        const { inputValue } = this.state;

        event.preventDefault();
        handleFormSubmit(inputValue);

        this.setState({
            inputValue: '',
        });
    }

    render() {
        const { inputValue } = this.state;

        return(
            <form onSubmit={this._handleFormSubmit.bind(this)}>
                <input
                    type="text"
                    name="task-name"
                    onChange={this._handleInputChange.bind(this)}
                    value={inputValue}
                />
                <input
                    type="submit"
                    name="task-submit"
                    value="Do It!"
                />
            </form>
        )
    }
}

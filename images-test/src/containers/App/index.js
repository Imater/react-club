import React, { Component } from 'react';


/* application components */
import { Fixed } from 'components/Fixed';

export class App extends Component {
  state = {
    count: 5,
    width: 100
  };

  changeCount(cnt = 20) {
    this.setState({
      count: cnt
    });
  }

  render() {
    return (
      <section>
        <Fixed
          changeCount={this.changeCount.bind(this)}
        />
        <div>
          {this.props.children}
        </div>
      </section>
    );
  }
}

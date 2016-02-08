import React, { Component } from 'react';
import R from 'ramda';

const images = R.range(0, 100).map(i => `http://lorempixel.com/g/300/${300 + i}/`);

/* application components */
import { Fixed } from 'components/Fixed';
import { Items } from 'components/Items';

export class App extends Component {
  state = {
    count: 5,
    width: 100
  };

  changeCount(cnt = 10) {
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
        <Items
          images={images}
          count={this.state.count}
          width={this.state.width}
        />
      </section>
    );
  }
}

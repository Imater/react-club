import React, { Component } from 'react';



export class Main extends Component {

  render() {
    return (
      <section>
        <div>
          {this.props.children}
        </div>
      </section>
    );
  }
}

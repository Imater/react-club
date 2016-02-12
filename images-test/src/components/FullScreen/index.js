import React, { Component } from 'react';


export default class FullScreen extends Component {

  render() {
    const { addView, images, params: { index } } = this.props;
    const image = images.find((item, key) => {
      return key === parseInt(index, 10);
    });
    const views = this.props.views.views.toJS();
    const count = views[index];
    return (
      <section>
        <div>
          <h1 style={{
            textAlign: 'right',
            position: 'absolute',
            right: 20
            }}
              onClick={addView.bind(this)}
            >
            {count}
          </h1>
          <img src={image} style={{width:'100%'}}/>
        </div>
      </section>
    );
  }
}

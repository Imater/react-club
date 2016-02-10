import React, { Component, PropTypes } from 'react';

import { styles } from './items.scss';
import R from 'ramda';

const images = R.range(0, 100).map(i => `http://lorempixel.com/g/300/${300 + i}/`);

export class Items extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();

  }
  componentWillReceiveProps() {
    setTimeout(()=>{
      this._resize();
    })
    console.info(1)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize.bind(this));
  }

  _resize() {
    const listWidth = this.refs.items.offsetWidth;
    const averageSize = this.props.params.width;
    const itemsInRow = Math.floor(listWidth / averageSize);
    const itemSize = 100 / itemsInRow + '%';
    this.setState({
      itemSize,
    });
  }

  _onClick(index) {
    const element = this.refs[`image${index}`];
    element.classList.add('active');
    console.info(index);
  }

  renderItem(item, index) {
    const { itemSize } = this.state;

    const style = {
      display: 'inline-block',
      width: itemSize,
      paddingBottom: itemSize,
      backgroundImage: `url(${item})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div
        className="item"
        style={style}
        key={index}
        ref={`image${index}`}
        onClick={this._onClick.bind(this, index)}
      >
      </div>
    );
  }

  render() {
    const { count } = this.props.params;
    const imagesFiltered = images.filter((el, key) => {
      return key < count;
    });

    return (
      <section
        id="items"
        ref="items"
        className={styles}
        style={{
          paddingLeft: '150px',
          position: 'relative',
      }}
      >
        {
          this.state && imagesFiltered.map(this.renderItem.bind(this))
        }
      </section>
    );
  }
}



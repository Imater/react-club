import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';

import { styles } from './items.scss';


export default class Items extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
    setTimeout(()=>{
      this.props.loadAll();
    });
  }
  componentWillReceiveProps() {
    setTimeout(()=>{
      this._resize();
    })
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
      <Link to={`/fullscreen/${index}`} key={index}>
        <div
          className="item"
          style={style}
          >
        </div>
      </Link>
    );
  }

  render() {
    const { images, changeCount, loadAll, params: { count } } = this.props;

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
        <button onClick={changeCount.bind(this, 3)} type="button">
          changeCount(3)
        </button>
        <button onClick={changeCount.bind(this, 10)} type="button">
          changeCount(10)
        </button>
        <button onClick={loadAll.bind(this)} type="button">
          loadAll()
        </button>
        {
          this.state && images.map(this.renderItem.bind(this))
        }
      </section>
    );
  }
}



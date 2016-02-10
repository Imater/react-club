import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { styles } from './styles.scss';

import { itemsMenu } from './settings.js';

export class Fixed extends Component {
  _renderItem(item, key) {
    const width = 100*(key+1);
    return (
      <li
        key={key}
      >
        <Link to={`/media/${width}/${item.count}`}>{item.name}</Link>
      </li>
    );
  }

  _renderMenu() {
    return itemsMenu.map((item, key) => {
      return (
        this._renderItem.bind(this, item, key)()
      );
    });
  }

  _onClick(cnt) {
    this.props.changeCount(cnt);
  }

  render() {
    return (
      <section className={styles}>
        <ul >
          {
            this._renderMenu.bind(this)()
          }
        </ul>
      </section>
    );
  }
}

Fixed.propTypes = {
  changeCount: PropTypes.func.isRequired,
};



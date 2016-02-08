import React, { Component, PropTypes } from 'react';

import { styles } from './styles.scss';

import { itemsMenu } from './settings.js';

export class Fixed extends Component {
  _renderItem(item, key) {
    return (
      <li
        key={key}
        onClick={this._onClick.bind(this, item.count)}
      >
        {item.name}
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



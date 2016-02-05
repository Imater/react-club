import React, { Component } from 'react';

import { styles } from './styles.scss';

import { itemsMenu } from './settings.js';

export class Fixed extends Component {
  _renderItem(item, key) {
    return (
      <li key={key}>
        {item}
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

  render() {

    return (
      <section className={styles}>
        <ul>
          {
            this._renderMenu.bind(this)()
          }
        </ul>
      </section>
    );
  }
}

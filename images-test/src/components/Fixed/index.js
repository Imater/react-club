import React, { Component } from 'react';

import { styles } from './styles.scss';

export class Fixed extends Component {
  render() {
    return (
      <section className={styles}>
        <ul>
          <li>
            Главная
          </li>
          <li>
            10 записей
          </li>
          <li>
            20 записей
          </li>
          <li>
            30 записей
          </li>
          <li>
            40 записей
          </li>
        </ul>
      </section>
    );
  }
}

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import styles from './MailList.module.css';

class MailList extends PureComponent {
  render() {
    return (
      <div>
       Mail List
      </div>
    );
  }
}

export default MailList;


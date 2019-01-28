// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

class MailList extends PureComponent {
  render() {
     const {mail, match, mailType} = this.props;
    return (      
        <div className={`${styles.container} t-${mailType}-list`}>
          {mail.map(message => {
            return <Link className={styles.link} key={message.id} to={`${match.url}/${message.id}`}>{message.body.substring(0,45)}</Link>
          })}
        </div>     
    );
  }
}

export default MailList;


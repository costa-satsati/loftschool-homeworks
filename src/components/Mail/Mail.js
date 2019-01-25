
import React, { PureComponent } from 'react';
import styles from './Mail.module.css';

class Mail extends PureComponent {
  render() {
    const  {from, to, body} = this.props;
    const mailLabel = from ? "from" : "to";
    return (
        <div className={styles.container}>
            <p className={`t-mail-${mailLabel}`}>{mailLabel}: {from || to}</p>
            <p className="t-mail-body">{body}</p>
        </div>
    );
  }
}

export default Mail;

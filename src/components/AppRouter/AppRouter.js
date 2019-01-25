// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React, { PureComponent } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';

class AppRouter extends PureComponent {
  
  renderNav = (match) =>  (
    <nav className={styles.nav}>
    <ul className={`${styles.navList} t-nav-list`}>
      <li className={styles.navElement}>
        <NavLink to="/app" title="Home" className={`${styles.link} t-link-home`}>
          Home
        </NavLink>
      </li>
      <li className={styles.navElement}>
        <NavLink 
          to={`${match.url}/inbox`}
          className={`${styles.link} t-link-inbox`}
        >
          Inbox
        </NavLink>
      </li>
      <li className={styles.navElement}>
        <NavLink
          to={`${match.url}/outbox`}
          className={`${styles.link} t-link-outbox`}
        >
          Outbox
        </NavLink>
      </li>
    </ul>
  </nav>
  );

  render() {
    const { match } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {this.renderNav(match)}
          <div className={styles.content}>
            <h3 className={styles.title}>{match.params.title}</h3>
            <Route path="/app" exact component={Home} />
            <Route path={`${match.path}/inbox`} component={InboxList} />
            <Route path={`${match.path}/outbox`} component={OutboxList} />
          </div>          
        </div>
      </div>
    );
  }
}

export default AppRouter;

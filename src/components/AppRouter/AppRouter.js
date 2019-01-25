
import React, { PureComponent } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

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
            <Route path={`${match.path}/inbox`} exact component={InboxList} />
            <Route path={`${match.path}/inbox/:id`} component={InboxMail} />
            <Route path={`${match.path}/outbox`} exact component={OutboxList} />
            <Route path={`${match.path}/outbox/:id`} component={OutboxMail} />
          </div>          
        </div>
      </div>
    );
  }
}

export default AppRouter;

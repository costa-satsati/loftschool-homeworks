import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="header__content">
      <AuthConsumer>
      {({ isAuthorized, email }) =>
        (<div className="header-menu">
          <p className="header-menu__email">{email}</p>
          <Button className="t-logout" >logout</Button>
        </div>)
      }
      </AuthConsumer>
      </div>
    );
  }
}

export default Header;

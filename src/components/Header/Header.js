import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <div className="header__content">
        <div className="header-menu">
          <p className="header-menu__email">stu@dent.com</p>
          <Button className="t-logout" >logout</Button>
        </div>
      </div>
    );
  }
}

export default Header;

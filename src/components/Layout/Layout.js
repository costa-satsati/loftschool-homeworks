import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    return (
      <Fragment>
        {header && this.renderHeader(header)}

        <main>{children}</main>

        {footer && this.renderFooter(footer)}
      </Fragment>
    );
  }
  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <HeaderChild />
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className="header__title">Footer</SectionTitle>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;

import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  validUser = {
    email: 'stu@dent.com',
    password: '123'
  };

  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
    if (
      this.validUser.email !== email ||
      this.validUser.password !== password
    ) {
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    } else {
      this.setState({ email: email, isAuthorized: true, authorizeError: '' });
    }
  }

  logout() {
    this.setState({ email: '', isAuthorized: false, authorizeError: '' });
  }

  getProviderValue() {
    return {authorize: this.authorize, ...this.state};
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };

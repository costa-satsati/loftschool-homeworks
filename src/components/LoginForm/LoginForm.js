// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { PureComponent } from 'react';
import styles from './LoginForm.module.css';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';

class LoginForm extends PureComponent {
  state = {
    values: {
      email: '',
      password: ''
    }
  };

  handleChange = event => {
    const { values } = this.state;
    this.setState({
      values: { ...values, [event.target.name]: event.target.value }
    });
  };

  handleSubmit = event => {
    const {
      values: { email, password }
    } = this.state;
    const { authorize } = this.props;

    authorize(email, password);
  };

  render() {
    const { isAuthorized, authError } = this.props;
    const {email, password} = this.state;

    if (isAuthorized) {
      return <Redirect to="/app" />;
    } else {
      return (
        <div className={styles.bg}>
          <div className={`${styles.form} t-form`}>
            <p>
              <label htmlFor="email">
                <span className={styles.labelText}>Почта</span>
              </label>
              <input
                type="text"
                name="email"
                className={`${styles.input} t-input-email`}
                value={email}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label htmlFor="password">
                <span className={styles.labelText}>Пароль</span>
              </label>
              <input
                type="password"
                name="password"
                className={`${styles.input} t-input-password`}
                value={password}
                onChange={this.handleChange}
              />
            </p>
            <p className={styles.error}>{authError}</p>
            <div className={styles.buttons}>
              <button className={`${styles.button} t-login`} onClick={this.handleSubmit}>Войти</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withAuth(LoginForm);

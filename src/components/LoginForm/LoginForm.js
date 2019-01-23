// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { PureComponent } from 'react';
import styles from './LoginForm.module.css';
import { withAuth } from '../../context/Auth';

class LoginForm extends PureComponent {
  render() {
    return (
      <div className={styles.bg}>
        <div className={`${styles.form} t-form`}>
          <p>
            <label for="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className={`${styles.input} t-input-email`}
              value=""
            />
          </p>
          <p>
            <label for="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={`${styles.input} t-input-password`}
              value=""
            />
          </p>
          <div className={styles.buttons}>
            <button className={`${styles.button} t-login`}>Войти</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);

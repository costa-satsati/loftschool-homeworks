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
        <div className="LoginForm_form__3dFfv t-form">
          <p>
            <label for="email">
              <span className="LoginForm_labelText__1L1gb">Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className="LoginForm_input__18lH8 t-input-email"
              value=""
            />
          </p>
          <p>
            <label for="password">
              <span className="LoginForm_labelText__1L1gb">Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className="LoginForm_input__18lH8 t-input-password"
              value=""
            />
          </p>
          <div className="LoginForm_buttons__67s-u">
            <button className="LoginForm_button__2irSw t-login">Войти</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);

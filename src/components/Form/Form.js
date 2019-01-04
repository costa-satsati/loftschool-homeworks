import React from 'react';
import './Form.css';
import bondImg from './assets/bond_approve.jpg';

class Form extends React.Component {
  state = {
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isSubmitted: false,
    values: {
      firstname: '',
      lastname: '',
      password: ''
    }
  };

  handleSubmit = event => {
    const { firstname, lastname, password } = this.state.values;

    event.preventDefault();
    if (firstname === 'James' && lastname === 'Bond' && password === '007') {
      this.setState({ isSubmitted: true });
    } else {
      if (!firstname) {
        this.setState({ errors: { firstname: 'Нужно указать имя' } });
      }

      if (firstname !== 'James') {
        this.setState({ errors: { firstname: 'Имя указано не верно' } });
      }
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(state => ({
      errors: {
        firstname: '',
        lastname: '',
        password: ''
      },
      values: {
        ...state.values,
        [name]: value
      }
    }));
  };

  render() {
    if (this.state.isSubmitted) {
      return (
        <div className="app-container">
          <img class="t-bond-image" alt="" src={bondImg} />
        </div>
      );
    }
    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Введите свои данные, агент</h1>
          {/* Имя */}
          <p className="field">
            <label className="field__label">
              <span className="field-label">Имя</span>
            </label>
            <input
              name="firstname"
              className="field__input field-input t-input-firstname"
              value={this.state.values.firstname}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-firstname">
              {this.state.errors.firstname}
            </span>
          </p>
          {/* Фамилия */}
          <p className="field">
            <label className="field__label">
              <span className="field-label">Фамилия</span>
            </label>
            <input
              name="lastname"
              className="field__input field-input t-input-lastname"
              value={this.state.values.lastname}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-lastname">
              {this.state.errors.lastname}
            </span>
          </p>
          {/* Пароль */}
          <p className="field">
            <label className="field__label">
              <span className="field-label">Пароль</span>
            </label>
            <input
              name="password"
              className="field__input field-input t-input-password"
              value={this.state.values.password}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-password">
              {this.state.errors.password}
            </span>
          </p>
          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
              onSubmit={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

import React, { Component } from 'react';
import formValidator from './helpers/formValidator';
import './Form.css';
import checkUser from './helpers/checkUser';
import BondImage from './assets/bond_approve.jpg';

const fields = [
  {
    label: 'Имя',
    name: 'firstname',
    inputType: 'text'
  },
  {
    label: 'Фамилия',
    name: 'lastname',
    inputType: 'text'
  },
  {
    label: 'Пароль',
    name: 'password',
    inputType: 'password'
  }
];

class Form extends Component {
  state = {
    values: {
      firstname: '',
      lastname: '',
      password: ''
    },
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    },
    isSubmited: false
  };

  handleChange = event => {
    this.setState({
      values: { ...this.state.values, [event.target.name]: event.target.value },
      errors: {
        firstname: '',
        lastname: '',
        password: ''
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { values } = this.state;
    const errors = formValidator(values);
    const { isSubmited, errors: userErrors } = checkUser(values);

    this.setState(state => ({
      errors: { ...state.errors, ...userErrors },
      isSubmited
    }));

    this.setState(state => ({
      errors: { ...state.errors, ...errors }
    }));
  };

  render() {
    const { isSubmited } = this.state;
    return (
      <div className="app-container">
        {isSubmited ? this.renderAnswer() : this.renderForm()}
      </div>
    );
  }

  renderAnswer() {
    return <img src={BondImage} alt="bond approve" className='t-bond-image' />;
  }

  renderForm() {
    const { values, errors } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Введите свои данные, агент</h1>

        {fields.map(({ name, label, inputType }) => (
          <p key={name} className="field">
            <label className="field__label" htmlFor={name}>
              <span className="field-label">{label}</span>
            </label>
            <input
              value={values[name]}
              onChange={this.handleChange}
              className={`field__input field-input t-input-${name}`}
              type={inputType}
              name={name}
            />
            <span className={`field__error field-error t-error-${name}`}>
              {errors[name]}
            </span>
          </p>
        ))}

        <div className="form__buttons">
          <input type="submit" className="button t-submit" value="Проверить" />
        </div>
      </form>
    );
  }
}

export default Form;
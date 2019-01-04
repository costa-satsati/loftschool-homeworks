import React from 'react';
import './Form.css';

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
    event.preventDefault();
    if (!this.state.values.firstname) {
      this.setState({ errors: { firstname: 'Нужно указать имя' } });
    }
  };

  render() {
    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label">
              <span className="field-label">Имя</span>
            </label>
            <input
              className="field__input field-input t-input-firstname"
              value={this.state.values.firstname}
            />
            <span className="field__error field-error t-error--firstname">
              {this.state.errors.firstname}
            </span>
          </p>
          <div class="form__buttons">
            <input
              type="submit"
              class="button t-submit"
              value="Проверить"
              onSubmit="handleSubmit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

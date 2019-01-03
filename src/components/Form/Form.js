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

  render() {
    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.values.firstname}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;

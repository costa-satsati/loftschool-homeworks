import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {};

  createNewRecordByEnter = event => {};

  toggleRecordComplete = event => {};

  createNewRecord = () => {};

  render() {
    //const { savedData } = this.props;
    const { inputValue } = this.state;
    return (
      <Card title="Список дел">
        <div class="todo t-todo-list">
          <div class="todo-item todo-item-new">
            <input
              className="todo-input t-input"
              onChange={this.handleChange}
              onKeyPress={this.createNewRecordByEnter}
              value={inputValue}
            />
            <span class="plus t-plus">+</span>
          </div>
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    return;
  }

  renderRecord = record => {
    return;
  };
}

export default withLocalstorage('todo-app', [])(Todo);

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

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const id = +event.target.dataset.todoId;
    const updatedArr = savedData.map(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    // resave
    saveData(updatedArr);
  };

  createNewRecord = () => {
    const { savedData, saveData } = this.props;
    const { inputValue } = this.state;

    if (inputValue) {
      const newRecord = {
        id: this.getId(),
        isComplete: false,
        text: inputValue
      };
      // save new record to localStorage
      saveData(savedData.concat(newRecord));
      //clear session
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title="Task List">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(record => this.renderRecord(record))}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const { inputValue } = this.state;
    return (
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          placeholder="Enter task"
          onChange={this.handleChange}
          onKeyPress={this.createNewRecordByEnter}
          value={inputValue}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>
          +
        </span>
      </div>
    );
  }

  renderRecord = record => {
    const { id, isComplete, text } = record;
    return (
      <div key={id} className="todo-item t-todo">
        <p className="todo-item__text">{text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          onClick={this.toggleRecordComplete}
          data-todo-id={id}
        >
          {isComplete ? '[x]' : '[]'}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);

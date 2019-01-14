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
    this.setState({inputValue: event.target.value});
  };

  createNewRecordByEnter = event => {};

  toggleRecordComplete = event => {};

  createNewRecord = () => {
    const { savedData, saveData } = this.props;
    const { inputValue } = this.state;
    const newRecord = {id: this.getId(), isComplete: false, text: inputValue};
    // save new record to localStorage
    saveData(savedData.concat(newRecord));
    //clear session 
    this.setState({inputValue: ''});
  };

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
            <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
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

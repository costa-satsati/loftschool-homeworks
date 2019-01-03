import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map(message => {
              return <Message key={message.text} text={message.text} />;
            })}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          placeholder="Type and hit ENTER"
          value={this.state.messageInput}
        />
      </div>
    );
  }

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(state => {
        const messages = state.messages.concat({ text: state.messageInput });

        return {
          messages,
          messageInput: ''
        };
      });
    }
  };
}

export default Chat;

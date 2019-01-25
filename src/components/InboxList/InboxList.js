// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';

class InboxList extends PureComponent {
  render() {
    return (
      <div >
        Inbox List
      </div>
    );
  }
}

export default InboxList;

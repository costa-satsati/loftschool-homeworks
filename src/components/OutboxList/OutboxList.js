// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';

class OutboxList extends PureComponent {
  render() {
    return (
      <div >
        Outbox List
      </div>
    );
  }
}

export default OutboxList;
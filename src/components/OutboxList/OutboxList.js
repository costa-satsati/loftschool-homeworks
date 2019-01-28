// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends PureComponent {
  render() {
    const {data, ...rest} = this.props;
    return (
      <div >
       <MailList mail={data.outbox} mailType="outbox" {...rest} />
      </div>
    );
  }
}

export default withData(OutboxList);
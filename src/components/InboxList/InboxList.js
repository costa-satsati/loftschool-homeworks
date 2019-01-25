// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends PureComponent {
  render() {
      const {data} = this.props;
    return (
      <div >
       <MailList/>
      </div>
    );
  }
}

export default withData(InboxList);

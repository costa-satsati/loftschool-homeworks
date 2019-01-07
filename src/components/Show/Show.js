import React from 'react';
import './Show.css';
import {getShowInfo} from 'api'

class Show extends React.Component {
  state = {
    showId: '',
    data: []
  };

  componentDidUpdate() {
      console.log('Did update');
      getShowInfo('santaBarbara');
  }

  static getDerivedStateFromProps() {
    console.log('Derived state from props');

  }

  render() {
    return <div className='show'>
    Hi
    <img alt='' className="show-image"/>
    </div>;
  }
}

export default Show;

import React from 'react';
import './Show.css';
import { getShowInfo } from 'api';

class Show extends React.Component {
  state = {
    showId: '',
    data: []
  };

  componentDidUpdate() {
    console.log('Did update');
    const { showId } = this.state;
    //update state's data
    this.setState({ data: getShowInfo(showId) });
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Derived state from props' + props.showId);

    if (props.showId !== state.showId) {
      return {
        showId: props.showId
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  render() {
    const { data } = this.state;

    return (
      <div className="show">
        {data.length > 0 ? (
          <img alt="" className="show-image" src={data.image.medium} />
        ) : null}
      </div>
    );
  }
}

export default Show;

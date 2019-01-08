import React from 'react';
import './Show.css';
import { getShowInfo } from 'api';

class Show extends React.Component {
  state = {
    showId: '',
    data: null
  };

  componentDidUpdate() {
    console.log('Did update');
    const { showId, data } = this.state;
    //update state's data
    if (data == null && showId !== '') {
      getShowInfo(showId).then(data => {
        this.setState({ data });
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Derived state from props' + props.showId);

    if (props.showId !== state.showId) {
      return {
        showId: props.showId,
        data: null
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  render() {
    const { data } = this.state;

    return (
      <div className="show">
        {data != null ? decodeURI(data.summary) : ""}
        <img alt="" className="show-image" src={data != null ? data.image.medium : ""} />
      </div>
    );
  }
}

export default Show;

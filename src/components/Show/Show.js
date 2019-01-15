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
    if (data != null) {
      return (
        <div className="show">
          <img alt={data.name} className="show-image" src={data.image.medium} />
          <h2 class="show-label t-show-name">{data.name}</h2>
          <p class="show-text t-show-genre">
            <b>Жанр: </b>
            {data.genres.toString()}
          </p>
          <p class="show-text t-show-summary">
            <div dangerouslySetInnerHTML={{ __html: data.summary }} />
          </p>
        </div>
      );
    } else {
      return <p class="show-inforation t-show-info">Шоу не выбрано</p>;
    }
  }
}

export default Show;

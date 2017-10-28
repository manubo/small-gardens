import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

class GardenMarker extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    garden: PropTypes.object,
  };

  render() {
    const { garden } = this.props;
    return (
      <Marker
        data-garden={garden}
        clickable={true}
        onClick={this.handleClick}
        key={garden.id}
        position={garden.position}
      />
    );
  }

  handleClick = () => {
    const { onClick, garden } = this.props;
    onClick(garden);
  };
}

const GardenMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 47.372419, lng: 8.532109 }}
    >
      {props.gardens.map(garden => (
        <GardenMarker
          key={garden.id}
          garden={garden}
          onClick={props.onGardenClick}
        />
      ))}
    </GoogleMap>
  ))
);

GardenMap.defaultProps = {
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />,
  isMarkerShown: true,
};

export default GardenMap;

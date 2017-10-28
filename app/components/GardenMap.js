import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GardenMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 47.372419, lng: 8.532109 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 47.372419, lng: 8.532109 }} />}
  </GoogleMap>
))

GardenMap.defaultProps = {
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />,
  isMarkerShown: true
}

export default GardenMap

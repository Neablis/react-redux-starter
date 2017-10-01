import React from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";

import SearchBox from 'react-google-maps/lib/places/SearchBox';

const WrappedMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder={props.placeholder}
      inputClassName='map-search-box'
    />
    <input
     name="directions-box"
     type="checkbox"
     checked={props.shown}
     onChange={props.toggleMarkers}
    />
    {props.markers}
    {props.directions}
  </GoogleMap>
));

export default WrappedMap;

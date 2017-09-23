/* global google */
import React, {Component} from "react";

import {
  withGoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";

import WrappedMap from './WrappedMap.jsx'

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SearchBoxExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      showMarkers: true,
      showDirections: false,
      markers: [],
      directions: null
    };
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter()
    });
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox;
  }

  handleDirections() {
    const DirectionsService = new google.maps.DirectionsService();

    const {
      markers
    } = this.state;

    let locations = markers.map(marker => {
      return marker.location;
    });

    if (markers.length > 1) {
      const waypoints = locations.slice(1, locations.length - 1).map(marker => {
        return {location: marker};
      });

      DirectionsService.route({
        origin: locations[0],
        destination: locations[locations.length - 1],
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  }

  toggleMarkers() {
    this.setState({
      showMarkers: !this.state.showMarkers,
      showDirections: !this.state.showDirections
    });
  }

  handlePlacesChanged() {
    const DirectionsService = new google.maps.DirectionsService();
    const places = this._searchBox.getPlaces();

    debugger;
    const bounds = new google.maps.LatLngBounds();

    let markers = places.map(place => ({
      location: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      },
      placeId: place.place_id,
      formatted_address: place.formatted_address,
      name: place.name,
      url: place.url
    }));

    if (this.state.markers.length) {
      markers = markers.concat(this.state.markers);
    }

    markers.map(marker => {
      bounds.extend(marker.location)
    });

    const mapCenter = markers.length > 0 ? bounds.getCenter() : this.state.center;

    this.setState({
      center: mapCenter,
      markers
    });

    this.handleDirections()

    this._map.fitBounds(bounds);
  }

  render() {
    let tmpMarkers = [];
    let tmpDirections = null;

    if (this.state.showMarkers) {
      tmpMarkers = this.state.markers.map((marker, index) => (
        <Marker position={{lat: marker.location.lat, lng: marker.location.lng}} key={index} />
      ));
    }

    if (this.state.showDirections && this.state.directions) {
      tmpDirections = <DirectionsRenderer directions={this.state.directions} />;
    }

    return (
      <WrappedMap
        containerElement={
          <div style={{ height: `500px`, width: '100%' }} />
        }
        mapElement={
          <div style={{ height: `100%`, width: '100%' }} />
        }
        center={this.state.center}
        onMapMounted={this.handleMapMounted.bind(this)}
        onBoundsChanged={this.handleBoundsChanged.bind(this)}
        onSearchBoxMounted={this.handleSearchBoxMounted.bind(this)}
        bounds={this.state.bounds}
        onPlacesChanged={this.handlePlacesChanged.bind(this)}
        directions={tmpDirections}
        markers={tmpMarkers}
        toggleMarkers={this.toggleMarkers.bind(this)}
        shown={this.state.showMarkers}
      />
    );
  }
}

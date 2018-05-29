import React, { Component } from "react";

class GoogleMap extends Component {

  renderGoogleMapsCoord() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  componentDidMount() {
    this.renderGoogleMapsCoord()
  }
  
  componentDidUpdate() {
    this.renderGoogleMapsCoord()
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;

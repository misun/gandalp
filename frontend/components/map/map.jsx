import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class Map extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
    // this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map);
  }

  componentDidUpdate() {
    const that = this;
    this.geocoder.geocode({'address': this.props.business.address}, (results, status)=>{
      if (status == 'OK') {
        that.map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: that.map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`businesses/${business.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'businesses/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
    this.toggleBounce();
  }

  toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  render() {
    return (
      <div id="map" className="map" ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(Map);

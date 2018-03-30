import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

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

  }
  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  componentDidUpdate() {
    const that = this;
    this.geocoder.geocode({'address': this.props.business.address}, (results, status)=>{
      if (status == 'OK') {
        that.map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: that.map,
            animation: google.maps.Animation.DROP,
            position: results[0].geometry.location
        });
      } else {
        //console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
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

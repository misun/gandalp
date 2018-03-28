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

  }
  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
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

  // componentDidMount() {
  //   const map = this.refs.map;
  //   this.map = new google.maps.Map(map, mapOptions);
  //   this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
  //   if (this.props.singleBiz) {
  //     // this.props.fetchBench(this.props.bizId);
  //   } else {
  //     // this.registerListeners();
  //     this.MarkerManager.updateMarkers(this.props.businesses);
  //   }
  // }
  //
  // componentDidUpdate() {
  //   if (this.props.singleBiz) {
  //     const targetBizKey = Object.keys(this.props.businesses)[0];
  //     const targetBiz = this.props.businesses[targetBizKey];
  //     this.MarkerManager.updateMarkers([targetBiz]); //grabs only that one business
  //   } else {
  //     this.MarkerManager.updateMarkers(this.props.businesses);
  //   }
  // }


  handleMarkerClick(business) {
    this.props.history.push(`businesses/${business.id}`);
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

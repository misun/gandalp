import React from 'react';
import ReactDOM from 'react-dom';

class MapIndex extends React.Component {

  constructor(props) {
    super(props);
    this.addBizPlace = this.addBizPlace.bind(this);
  }
  componentDidMount(){
    this.geocoder = new google.maps.Geocoder();
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      // center: { lat: 40.7323807, lng: -73.9796212}, //bryan park
      zoom: 10
    };
    this.map = new google.maps.Map(map, options);
    this.bounds  = new google.maps.LatLngBounds();
  }

  //after all markers set up, auto-zoom & auto-center
  componentDidUpdate(){
    this.map.setZoom(11);
    // this.map.fitBounds(this.bounds);       //auto-zoom
    this.map.panToBounds(this.bounds);     //auto-center
  }

  //after fetchFilteredBiz on business_index, map gets newProps
  componentWillReceiveProps(nextProps) {
    var filteredBusinesses = Object.values(nextProps.businesses);

    filteredBusinesses.forEach( (biz, idx) => {
      this.geocoder.geocode({'address': biz.address}, (results, status) => {
        if (status == 'OK') {
          this.addBizPlace( results[0].geometry.location, (idx+1).toString());
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }

  addBizPlace(bizPos, idx) {
    // const centerPos = new google.maps.LatLng(this.state.lat, this.state.lng);
    const marker = new google.maps.Marker({
      label: idx,
      animation: google.maps.Animation.DROP,
      position: bizPos,
      map: this.map
    });

    this.bounds.extend(bizPos);
    this.map.setCenter(bizPos);

    // when the marker is clicked on
    marker.addListener('click', () => {
      //future feature
    });
  }

  render() {
    return (
      <div>
        <div id='map' ref='map'/>
      </div>
    );
  }
}

export default MapIndex;

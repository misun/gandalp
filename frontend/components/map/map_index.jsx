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
      center: { lat: 40.7323807, lng: -73.9796212}, //bryan park
      zoom: 13
    };
    this.map = new google.maps.Map(map, options);
    this.bounds  = new google.maps.LatLngBounds();
  }

  //after all markers set up, auto-zoom & auto-center
  componentDidUpdate(){
    // this.map.fitBounds(this.bounds);       //auto-zoom
    this.map.panToBounds(this.bounds);     //auto-center
  }

  //after fetchFilteredBiz on business_index, map gets newProps
  componentWillReceiveProps(nextProps) {
    var filteredBusinesses = Object.values(nextProps.businesses);

    filteredBusinesses.forEach( biz => {
      this.geocoder.geocode({'address': biz.address}, (results, status) => {
        if (status == 'OK') {
          this.addBizPlace( results[0].geometry.location );
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  }

  addBizPlace(bizPos) {
    // const centerPos = new google.maps.LatLng(this.state.lat, this.state.lng);

    const marker = new google.maps.Marker({
      position: bizPos,
      map: this.map
    });

    this.bounds.extend(bizPos);
    this.map.setCenter(bizPos);

    // when the marker is clicked on, alert the name
    marker.addListener('click', () => {
      //future feature
    });
  }

  //future feature
  // listenForMove() {
  //   google.maps.event.addListener(this.map, 'idle', () => {
  //     const bounds = this.map.getBounds();
  //     console.log('map has moved, check console to see updated bounds');
  //
  //     console.log('center',
  //       bounds.getCenter().lat(),
  //       bounds.getCenter().lng());
  //     console.log("north east",
  //       bounds.getNorthEast().lat(),
  //       bounds.getNorthEast().lng());
  //     console.log("south west",
  //       bounds.getSouthWest().lat(),
  //       bounds.getSouthWest().lng());
  //   });
  // }

  render() {
    return (
      <div>
        <div id='map' ref='map'/>
      </div>
    );
  }
}

export default MapIndex;

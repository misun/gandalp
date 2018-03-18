/* global google:false */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(businesses){
    const businessesObj = {};
    businesses.forEach(biz => businessesObj[biz.id] = biz);

    businesses
      .filter(biz => !this.markers[biz.id])
      .forEach(newBiz => this.createMarkerFromBusiness(newBiz, this.handleClick))

    Object.keys(this.markers)
      .filter(bizId => !businessesObj[bizId])
      .forEach((bizId) => this.removeMarker(this.markers[bizId]))
  }

  updateMarker(biz){
    console.log('time to update');
    this.createMarkerFromBusiness( biz, this.handleClick);
  }

  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id,
      title: 'hello workd',
      animation: google.maps.Animation.DROP
    });

    marker.addListener('click', () => this.handleClick(biz));
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;

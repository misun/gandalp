import React from 'react';

class BusinessItemDetail extends React.Component{

  render(){
    const photos = this.props.business.photos.map( url => (
      <li>
        <img src={ url } />
      </li>
    ));

    return (
      <div class="biz-content">

        <section class="biz-content-top">
          <div className="biz-content-main">
            <div className="map-box"></div>
            <div classNmae="show-case"></div>
            <ul>
              <h1> BUSINESS ITEM DETAIL </h1>
              <li>{ this.props.business.name }</li>
              <li>{ this.props.business.price_range }</li>
              <li>{ this.props.business.category }</li>
              <li>{ this.props.business.address }</li>
              <li>{ this.props.business.phone }</li>
              <li>{ this.props.business.monday }</li>
              <li>{ this.props.business.tuesday }</li>
              <li>{ this.props.business.wednesday }</li>
              <li>{ this.props.business.thursday }</li>
              <li>{ this.props.business.friday }</li>
              <li>{ this.props.business.saturday }</li>
              <li>{ this.props.business.sunday }</li>
            </ul>
          </div>
        </section>
        <section class="biz-content-bottom">
          <div className="biz-content-main">
            div 2
          </div>
        </section>
      </div>

    );
  }

}

export default BusinessItemDetail;

import React from 'react';

class BusinessItemDetail extends React.Component{

  render(){

    return (
      <div className="biz-content">

        <section className="biz-content-top">
          <div className="biz-top-main">
            <div className="biz-header">
              <div className="biz-header-left">
              <h1>Chip NYC</h1>
              <span className="price-range">$$</span>
              <span className="category">Bakery</span>
              </div>
              <div className="biz-header-right"></div>
            </div>
            <div className="biz-sub-content">
              <div className="map-box">
                <h1>map box</h1>
              </div>
              <div className="show-case">
                <h1>show box</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="biz-content-bottom">
          <div className="biz-bottom-main">
            <div className="biz-leftbar"></div>
            <div className="biz-rightbar"></div>
          </div>
        </section>
      </div>

    );
  }

}

export default BusinessItemDetail;

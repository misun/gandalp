import React from 'react';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';

class BusinessHome extends React.Component{
  componentDidMount(){
    this.props.fetchAllBiz();
  }

  render(){
    const businesses = this.props.businesses.map( biz => (
      <div className="biz-item" key={biz.id}>
        <BusinessItemContainer business={ biz } parent={ 'biz-home' } />
      </div>
    ));
    return (
      <section className="biz-home">
        <div className="biz-home-btm">
          <h3>Hot & New Businesses </h3>
          <div className="biz-home-btm-main">
            { businesses }
          </div>
          <Link to='/business'><h3>See more hot and new businesses</h3></Link>
        </div>
      </section>
    );
  }
}

export default BusinessHome;

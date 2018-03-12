import React from 'react';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';

class BusinessIndex extends React.Component{
  componentDidMount(){
    this.props.fetchAllBiz();
  }

  render(){
    const businesses = this.props.businesses.map( biz => (
      <div className="biz-item"><BusinessItemContainer key={biz.id} business={ biz } /></div>
    ));
    return (
      <section className="biz-index">
        <h3>Hot & New Businesses </h3>
        <div className="biz-index">
            { businesses }
        </div>
        <Link to='/business'><h3>See more hot and new businesses</h3></Link>
      </section>
    );
  }
}

export default BusinessIndex;

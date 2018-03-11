import React from 'react';
import BusinessItem from './business_item';

class BusinessIndex extends React.Component{
  componentDidMount(){
    this.props.fetchAllBiz();
  }

  render(){
    const businesses = this.props.businesses.map( biz => (
      <BusinessItem key={biz.id} business={ biz }/>

    ));
    return (
      <div>
        { businesses }
      </div>
    );
  }
}

export default BusinessIndex;

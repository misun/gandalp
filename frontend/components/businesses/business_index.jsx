import React from 'react';
import BusinessItemContainer from './business_item_container';

class BusinessIndex extends React.Component{
  componentDidMount(){
    this.props.fetchAllBiz();
  }

  render(){
    const businesses = this.props.businesses.map( biz => (
      <BusinessItemContainer key={biz.id} business={ biz } />
    ));
    return (
      <div>
        { businesses }
      </div>
    );
  }
}

export default BusinessIndex;

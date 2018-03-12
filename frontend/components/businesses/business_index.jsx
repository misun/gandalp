import React from 'react';
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
        <div className="biz-index">
        { businesses }
        </div>
      </section>
    );
  }
}

export default BusinessIndex;

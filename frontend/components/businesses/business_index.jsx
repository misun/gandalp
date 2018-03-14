import React from 'react';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';
import Header from '../layouts/header';

class BusinessIndex extends React.Component{
  componentDidMount(){
    this.props.fetchAllBiz();
  }

  render(){
    const businesses = this.props.businesses.map( biz => (
      <div className="biz-index-item" key={biz.id}>
        <BusinessItemContainer business={ biz } parent={ 'biz-index'} />
      </div>
    ));
    return (
      <div className="biz-content">

        <Header />
        <section className="biz-content-top">
        </section>

        <section className="biz-content-bottom">
          <div className="biz-bottom-main">
            <div className="biz-leftbar">
              { businesses }
            </div>

            <div className="biz-rightbar">
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default BusinessIndex;

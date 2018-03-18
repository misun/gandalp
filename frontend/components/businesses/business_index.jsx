import React from 'react';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';
import { MdBuild} from 'react-icons/lib/md';

class BusinessIndex extends React.Component{
  componentDidMount(){
    debugger

    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const bizName = params.get('bizName');
    const loc = params.get('loc');

    if (search){
      debugger
      this.props.fetchAllBiz({keywords: {bizName, loc}});
    }else {
      this.props.fetchAllBiz();
    }
  }

  render(){
    debugger
    const businesses = this.props.businesses.map( biz => (
      <div className="biz-index-item" key={biz.id}>
        <BusinessItemContainer key={biz.id} business={ biz } parent={ 'biz-index'} />
      </div>
    ));
    return (
      <div className="biz-content">
        <section className="biz-content-top">
          <h1><strong>Places</strong> near Civic Center, Manhattan, NY</h1>
        </section>

        <section className="biz-content-bottom">
          <div className="biz-bottom-main">
            <div className="biz-leftbar">
              { businesses }
            </div>

            <div className="biz-rightbar">
                map box <MdBuild size={40} />
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default BusinessIndex;

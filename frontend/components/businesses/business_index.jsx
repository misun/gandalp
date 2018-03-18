import React from 'react';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';
import { MdBuild} from 'react-icons/lib/md';

class BusinessIndex extends React.Component{
  componentDidMount(){
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const bizName = params.get('bizName');
    const loc = params.get('loc');

    if ( bizName || loc ){
      debugger
      this.props.fetchAllBiz({keywords: {bizName, loc}});
    }else {
      debugger
      this.props.fetchAllBiz();
    }
  }

  render(){

    const businesses = this.props.businesses.map( biz => (
      <div className="biz-index-item" key={biz.id}>
        <BusinessItemContainer business={ biz } parent={ 'biz-index'} />
      </div>
    ));

    return (
      <div className="biz-content">
        <section className="biz-content-top">
           { this.props.loc ? <h1><strong>Places</strong> near { this.props.loc } </h1> : "" }
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

import React from 'react';
import { Link } from 'react-router-dom';
import BusinessItemContainer from './business_item_container';
import { MdBuild} from 'react-icons/lib/md';
import MapIndex from '../map/map_index';

class BusinessIndex extends React.Component{
  componentDidMount(){
    const { bizName, loc } = this.props;

    if ( bizName || loc ){
      this.props.fetchFilteredBiz({keywords: {bizName, loc}});
    }else {
      this.props.fetchAllBiz();
    }
  }

  render(){
    const businesses =  Object.values(this.props.businesses).map( biz => (
      <div className="biz-index-item" key={biz.id}>
        <BusinessItemContainer business={ biz } parent={ 'biz-index'} />
      </div>
    ));

    // we need to provide a center coordinate for our map, this is SF
    const mapCenter = { lat: 37.7758, lng: -122.435 };


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
                <MapIndex center={mapCenter} businesses={this.props.businesses}/>
            </div>

          </div>
        </section>
      </div>
    );
  }
}

export default BusinessIndex;

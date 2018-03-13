import React from 'react';
import { Link } from 'react-router-dom';

class BusinessItem extends React.Component{

  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchBizAllPhotos(this.props.business.id);
  }

  render(){
    const photo_url = this.props.business.photos ? this.props.business.photos[0] : null;
    return (
      <ul>
        <li><Link to={`/business/${this.props.business.id}`}>
          <img className="biz-img" src={ photo_url } />
        </Link></li>
        <li>{ this.props.business.name }</li>
        <li>{ this.props.business.price_range }</li>
        <li>{ this.props.business.category }</li>
        <li>{ this.props.business.address }</li>
      </ul>
    );
  }
}
export default BusinessItem;

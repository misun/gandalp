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
    return (
      <ul>
        <li><Link to={`/business/${this.props.business.id}`}>
          <img className="biz-img" src={ this.props.business.photos } />
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

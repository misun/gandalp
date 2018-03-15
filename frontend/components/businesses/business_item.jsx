import React from 'react';
import { Link } from 'react-router-dom';
import { MdStar, MdStarBorder, MdStars,  MdStarOutline, MdStarHalf, MdBuild} from 'react-icons/lib/md';

class BusinessItem extends React.Component{

  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchBizAllPhotos(this.props.business.id);
  }

  render(){
    const photo_url = this.props.business.photos ? this.props.business.photos[0] : null;

    let biz_item;
    if (this.props.parent === 'biz-home'){
      return (
        <ul>
          <li><Link to={`/business/${this.props.business.id}`}>
            <img src={ photo_url } />
          </Link></li>
          <li>{ this.props.business.name }</li>
          <li>{ this.props.business.price_range }</li>
          <li>{ this.props.business.category }</li>
          <li>{ this.props.business.address }</li>
        </ul>
      );
    } else{
      return (
        <div className="biz-item-wrapper">
          <div className="biz-item-top">
            <div className="item-left">
              <Link to={`/business/${this.props.business.id}`}>
                <img className="biz-idx-img" src={ photo_url } />
              </Link>
            </div>
            <div className="item-middle">
                <h1>{ this.props.business.name }</h1>
                <div className="review-rate-star">
                  <MdStar color="#ed883b"/>
                  <MdStar color="#ed883b"/>
                  <MdStar color="#ed883b"/>
                  <MdStar color="#ed883b"/>
                  <MdStar color="#ed883b"/>
                  &nbsp;&nbsp;&nbsp;
                  <h4>212 Reviews</h4>
                </div>

                <div className="biz-header-info">
                  <span className="price-range">$$ {this.props.business.price_range}</span>
                    &nbsp;&nbsp;&nbsp;
                  <span className="category">
                    { this.props.business.category }</span>
                </div>
            </div>
            <div className="item-right">
              <div>{ this.props.business.address }</div>
              <div>{ this.props.business.phone }</div>
            </div>
          </div>
          <div className="biz-item-bottom">
            <div className="item-left"></div>
            <div className="item-wide-right">
              review
              <MdBuild size={40} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
      biz_item;
      </div>
    );
  }
}
export default BusinessItem;

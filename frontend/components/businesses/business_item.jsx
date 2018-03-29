import React from 'react';
import { Link } from 'react-router-dom';
import { MdStar, MdStarBorder, MdStars,  MdStarOutline, MdStarHalf, MdBuild} from 'react-icons/lib/md';

class BusinessItem extends React.Component{

  render(){
    const { business } = this.props;

    let rating = [];

    for(let i=0; i < business.review.rating; i++){
      rating.push(<MdStar key={i} size="20px" color="#ed883b"/>);
    }

    if (this.props.parent === 'biz-home'){
      return (
        <ul>
          <li><Link to={`/business/${this.props.business.id}`}>
            <img src={ business.photo } />
          </Link></li>
          <li>{ business.name }</li>
          <li>{ business.price_range }</li>
          <li>{ business.category }</li>
          <li>{ business.address }</li>
        </ul>
      );
    } else{
      return (
        <div className="biz-item-wrapper">
          <div className="biz-item-top">
            <div className="item-left">
              <Link to={`/business/${business.id}`}>
                <img className="biz-idx-img" src={ business.photo } />
              </Link>
            </div>
            <div className="item-middle">
                <h1>{ business.name }</h1>
                <div className="review-rate-star">
                  { rating }
                  &nbsp;&nbsp;&nbsp;
                  <h4>{ business.review_cnt} Reviews</h4>
                </div>

                <div className="biz-header-info">
                  <span className="price-range">$$ {business.price_range}</span>
                    &nbsp;&nbsp;&nbsp;
                  <span className="category">
                    { business.category }</span>
                </div>
            </div>
            <div className="item-right">
              <div>{ business.address }</div>
              <div>{ business.phone }</div>
            </div>
          </div>
          <div className="biz-item-bottom">
            <div className="item-left"></div>
            <div className="item-wide-right">
              <div className="review-idx-thumb">
                <img src={ business.user_img } />
              </div>
              <div className="review-idx-content">
                <p>
                  { business.review.body }
                </p>
                <Link to={`/business/${business.id}`}>
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default BusinessItem;

import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating';

class BusinessItem extends React.Component{

  render(){
    const { business, idx } = this.props;
    if (this.props.parent === 'biz-home'){
      return (
        <ul>
          <li><Link to={`/business/${this.props.business.id}`}>
            <img src={ business.photo } />
          </Link></li>
          <li>{ business.name }</li>
          <li><Rating avgRating={ business.avg_rating } /></li>
          <li>{ business.price_range }</li>
          <li>{ business.category }</li>
          <li>{ business.address }</li>
        </ul>
      );
    } else{
      return (
        <div className="biz-item-wrapper">
          <div className="item-grid-1">
            <Link to={`/business/${business.id}`}>
              <img className="biz-idx-img" src={ business.photo } />
            </Link>
          </div>
          <div className="item-grid-2">
            <h1>{ idx }. { business.name }</h1>
            <div className="review-rate-index">
              <Rating avgRating={ business.avg_rating } />
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
          <div className="item-grid-3">
            { business.address }
          </div>
          <div className="item-grid-4 review-idx-content">
            <p>
              { business.review.body }
            </p>
            <Link to={`/business/${business.id}`}>
              read more
            </Link>
          </div>
        </div>
      );
    }
  }
}
export default BusinessItem;

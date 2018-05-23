import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Review from '../reviews/review';
import Map from '../map/map';
import Rating from '../rating/rating';
import BusinessInfo from './business_info';

class BusinessShow extends React.Component {
    constructor(props){
      super(props);
    }
    componentDidMount(){
      this.props.fetchBiz(this.props.match.params.businessId);
    }
    render(){
      const {business, reviews, currentUser, fetchBiz } = this.props;

      const gallery = business.photos ? business.photos.map( (photo, idx) => (
            <div className={ ((idx === 1) ? "gallery-main" : "gallery") } key={ idx } >
              <a href={ photo } target="_blank" >
                <img src={ photo } />
              </a>
            </div>
        )) : null;
      const reviewsComponent = reviews.map( (review) => (
        <Review key={review.id} review={review} user={review.user} avgRating={ business.avg_rating } businessId={business.id} />
      ));

      return(
          <div className="biz-content">

            <section className="biz-content-top">
              <div className="biz-top-main">

                <div className="biz-header">
                  <div className="bh-1"><h1>{ business.name }</h1></div>
                  <div className="bh-2">

                  </div>
                  <div className="bh-3">
                    <Rating avgRating={ business.avg_rating } />
                    <h4>{ business.review_cnt } Reviews</h4>

                  </div>
                  <div className="bh-4">
                    <Link
                      to={`/business/${business.id}/reviews/new`} className="write-review-btn" >
                      &nbsp;
                      Write a Review
                    </Link>
                  </div>
                  <div className="bh-5">
                    <span className="category">
                      { business.category }
                    </span>
                  </div>
                  <div className="bh-6">
                  </div>
                </div>

                <div className="biz-sub-content">
                  <div className="map-box">
                    <Map
                      business={business}
                      businessId={business.id}
                      singleBiz={true}
                      fetchBiz={fetchBiz}
                    />
                  {business.address}
                  </div>
                  <div className="show-case">
                    { gallery }
                  </div>
                </div>
              </div>
            </section>

            <section className="biz-content-bottom">
              <div className="biz-bottom-main">

                <div className="biz-leftbar">
                  { reviewsComponent }
                </div>

                <div className="biz-rightbar">
                  <BusinessInfo business={business} />
                </div>

              </div>
            </section>
          </div>
        );
    }

}

export default withRouter(BusinessShow);

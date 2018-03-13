import React from 'react';

class BusinessItemDetail extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      name: '',
      photos: [],
      price_range: '',
      category: '',
      address: '',
      phone: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    };
    // debugger
  }
  componentDidMount(){
    this.props.fetchBiz(this.props.match.params.businessId);
    this.props.fetchBizAllPhotos(this.props.match.params.businessId);
  }

  render(){
    return (
      <section className="biz-item-detail">
        <div>
          <ul>
            <h1> BUSINESS ITEM DETAIL </h1>
            <li>{ this.state.photos }</li>
            <li>{ this.state.name }</li>
            <li>{ this.state.price_range }</li>
            <li>{ this.state.category }</li>
            <li>{ this.state.address }</li>
            <li>{ this.state.phone }</li>
            <li>{ this.state.monday }</li>
            <li>{ this.state.tuesday }</li>
            <li>{ this.state.wednesday }</li>
            <li>{ this.state.thursday }</li>
            <li>{ this.state.friday }</li>
            <li>{ this.state.saturday }</li>
            <li>{ this.state.sunday }</li>
          </ul>
        </div>
        <div>
          div 2
        </div>
      </section>
    );
  }

}

export default BusinessItemDetail;

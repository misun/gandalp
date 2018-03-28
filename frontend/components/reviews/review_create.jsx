import React from 'react';
import Header from '../layouts/header';

class ReviewCreate extends React.Component{

  constructor(props){
    super(props);

    const defaultState = {
      image: null,
      imageUrl: null
    }
    this.state = Object.assign({}, defaultState, this.props.review);

    this.updateInput = this.updateInput.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.props.fetchBiz(this.props.match.params.businessId);
  }

  handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();
    Object.keys(this.state).forEach( key => {

      if ( key !== 'imageUrl' && this.state[key] !== null ){
        formData.append(`review[${key}]`, this.state[key]);
      }
    })
    this.props.processForm(formData).then(()=>this.props.history.push(`/business/${this.props.match.params.businessId}`));
  }

  mouseOver(rating){
    const background = document.getElementById('write-review-rating-background');
    const position = 48 * rating - 24;
    background.style.backgroundPosition = `0 -${position}px`;
    this.setState({rating: rating});
  }

  handleChange(e, rating){
    this.setState({rating});
  }

  updateInput(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        image: file,
        imageUrl: fileReader.result
      });
    };
    if (file){
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    const { business, formType, error } = this.props;
    const businessName = business? <h1><a href={`/#/business/${business.id}`} target="_blank">{business.name}</a></h1> : '';

    return (
        <div className="content">
          <section className="write-review">
            { businessName }
            <form
              onSubmit={this.handleSubmit}
              method="post">
              <div className='write-review-input'>
              <div id='write-review-rating-background'>
                <ul id='write-review-rating'>
                  <li>
                    <label htmlFor='rate-1' onMouseOver={()=>this.mouseOver(1)}>
                      <input id='rate-1' type='radio' name='rating' id='rating-1' checked={this.state.rating === 1} onChange={(e)=>this.handleChange(e, 1)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-2' onMouseOver={()=>this.mouseOver(2)}>
                      <input id='rate-2' type='radio' name='rating' id='rating-2' checked={this.state.rating === 2} onChange={(e)=>this.handleChange(e, 2)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-3' onMouseOver={()=>this.mouseOver(3)}>
                      <input id='rate-3' type='radio' name='rating' id='rating-3' checked={this.state.rating === 3} onChange={(e)=>this.handleChange(e, 3)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-4' onMouseOver={()=>this.mouseOver(4)}>
                      <input id='rate-4' type='radio' name='rating' id='rating-4' checked={this.state.rating === 4} onChange={(e)=>this.handleChange(e, 4)}/>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='rate-5' onMouseOver={()=>this.mouseOver(5)}>
                      <input id='rate-5' type='radio' name='rating' id='rating-5' checked={this.state.rating === 5} onChange={(e)=>this.handleChange(e, 5)}/>
                    </label>
                  </li>
                </ul>
              </div>
              <textarea
                onChange={this.updateInput('body')}
                value={this.state.body}
                placeholder="Your review helps others learn about great local businesses. &#10;Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."
                />
              <img src={this.state.imageUrl} />
              <input type="file" onChange={this.updateFile}/>
            </div>
            <input type='submit' value={formType}/>
            </form>
          </section>
        </div>
    );
  }
}

export default ReviewCreate;

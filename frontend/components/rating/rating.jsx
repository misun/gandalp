import React from 'react';

class Rating extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: props.avgRating,
      backgroundPosition: ''
    }
  }
  componentDidMount(){
    const position = 48 * this.props.avgRating - 24;
    const backgroundPosition = `0 -${position}px`;

    this.setState({
      backgroundPosition: backgroundPosition
    });
  }
  componentWillReceiveProps(nextProps){
    const position = 48 * nextProps.avgRating - 24;
    const backgroundPosition = `0 -${position}px`;

    this.setState({
      rating: nextProps.avgRating,
      backgroundPosition: backgroundPosition
    });
  }
  render(){
    return (
      <div id='write-review-rating-background' style={{backgroundPosition: this.state.backgroundPosition}}>
        <ul id='write-review-rating'>
          <li>
            <label htmlFor='rate-1' >
              <input id='rate-1' type='radio' name='rating' id='rating-1' checked={ this.state.rating === 1} />
            </label>
          </li>
          <li>
            <label htmlFor='rate-2' >
              <input id='rate-2' type='radio' name='rating' id='rating-2' checked={ this.state.rating === 2} />
            </label>
          </li>
          <li>
            <label htmlFor='rate-3' >
              <input id='rate-3' type='radio' name='rating' id='rating-3' checked={ this.state.rating === 3} />
            </label>
          </li>
          <li>
            <label htmlFor='rate-4' >
              <input id='rate-4' type='radio' name='rating' id='rating-4' checked={ this.state.rating === 4} />
            </label>
          </li>
          <li>
            <label htmlFor='rate-5' >
              <input id='rate-5' type='radio' name='rating' id='rating-5' checked={ this.state.rating === 5} />
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Rating;

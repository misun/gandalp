import React from 'react';
import Header from '../layouts/header';

class ReviewCreate extends React.Component{

  constructor(props){
    super(props);
    this.state = this.props.review;

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.processForm(this.state);
  }

  updateInput(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render(){
    const user  = this.props.currentUser;

    return (
      <div>
        <Header />
        <div className="content">
          <section className="content-leftbar">
            <form
              onSubmit={this.handleSubmit}
              method="post">

              <fieldset>
                <legend>Create Review</legend>

                <input
                  type="hidden"
                  value={ this.state.business_id } />
                <input
                  type="hidden"
                  value={ this.state.user_id } />
                <input
                  type="text"
                  value={ this.state.body }/>

                <ul>
                  <li>1<input
                    type="radio"
                    name="rating"
                    value="1" />
                  </li>
                  <li>2<input
                    type="radio"
                    name="rating"
                    value="2" />
                  </li>
                  <li>3<input
                    type="radio"
                    name="rating"
                    value="3" />
                  </li>
                  <li>4<input
                    type="radio"
                    name="rating"
                    value="4" />
                  </li>
                  <li>5<input
                    type="radio"
                    name="rating"
                    value="5" />
                  </li>
                </ul>

                <button type="submit">Post Review</button>
              </fieldset>
            </form>

          </section>
          <section className="content-rightbar">
            content main
          </section>
        </div>
      </div>
    );
  }
}

export default ReviewCreate;

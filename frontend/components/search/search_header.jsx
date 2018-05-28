import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bizName: '',
      loc: '',
      allLocs: [],
      allBizes: []
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateInput(field){
    return e => {
      return this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e){
   e.preventDefault();
   const keywords = Object.assign({}, this.state);

   if (keywords.bizName || keywords.loc){

     this.props.fetchFilteredBiz({keywords}).then(//promise takes a function as an argument
       () => {
         this.props.history.push(`/business?bizName=${this.state.bizName}&loc=${this.state.loc}`);
       }
     );
   }else {
     this.props.fetchAllBiz().then(
       () => {
         this.props.history.push(`/business`);
       }
     );
   }
  }

  render(){
    return (
    <React.Fragment>
    <form onSubmit={this.handleSubmit} >
      <div className="input-label hd-search-1">Find</div>
      <div className="input-label hd-search-2">
        <input
          placeholder="Bubo, Chip NYC, ..."
          value={this.state.bizName}
          onChange={this.updateInput('bizName')}
          />
      </div>
      <div className="input-label hd-search-3">Near</div>
      <div className="input-label hd-search-4">
        <input
          placeholder="Brooklyn, NY,..."
          value={this.state.loc}
          onChange={this.updateInput('loc')}
          />
      </div>
      <div className="hd-search-5">
        <button type="submit" >
          <i className="material-icons">
            search
          </i>
        </button>
      </div>
    </form>
  </React.Fragment>);
  }
}

export default withRouter(SearchHeader);

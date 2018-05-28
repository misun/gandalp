import React from 'react';
import { MdSearch } from 'react-icons/lib/md';
import AutoSuggest from './auto-suggest';

class SearchMain extends React.Component {
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
    this.clickBizName = this.clickBizName.bind(this);
    this.clickLoc = this.clickLoc.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      allLocs: nextProps.allLocs,
      allBizes: nextProps.allBizes
    });
  }

  updateInput(field){
    return e => {
      return this.setState({
        [field]: e.target.value
      });
    };
  }

  clickBizName(e){
    e.preventDefault();
    this.setState(
      {
        bizName: e.target.value
       }
    )
  }

  clickLoc(e){
    e.preventDefault();
    this.setState(
      {
        loc: e.target.value
       }
    )
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
    const locSuggest = this.state.locSuggest ? this.state.locSuggest.map( (loc, idx) =>
      {
        if ( idx < 7){
          return (
            <button
              key={ idx }
              onClick={ this.handleClick }
              value={ loc }
              style={{padding: "5px 0"}}>
              { loc }
            </button>);
        }
      }
    ) : "";

    return (
      <div className="search-wrap">
        <form onSubmit={this.handleSubmit} >
          <div className="biz-search">
            <span className="input-label">Find</span>
            <span className="input-text">
                <input
                  placeholder="Bubo, Chip NYC, ..." value={this.state.bizName}
                  onChange={this.updateInput('bizName')} />
            </span>
          </div>

          <div className="loc-search">
            <span className="input-label">Near</span>
            <span className="input-text">
                <input
                  placeholder="Brooklyn, NY,..." value={this.state.loc}
                  onChange={this.updateInput('loc')} />
            </span>
          </div>
        <button type="submit" className="search-icon">
            <MdSearch size={30} color='white'/>
        </button>
        </form>
        <div className="auto-suggest">
          <div></div>
          <div>
            <AutoSuggest
              onClick={this.clickBizName}
              allSuggestions={this.state.allBizes}
              value={this.state.bizName}
              />
          </div>
          <div></div>
          <div>
            <AutoSuggest
              onClick={this.clickLoc}
              allSuggestions={this.state.allLocs}
              value={this.state.loc}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchMain;

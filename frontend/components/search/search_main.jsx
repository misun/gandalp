import React from 'react';
import { MdSearch } from 'react-icons/lib/md';

class SearchMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bizName: '',
      loc: '',
      locSuggest: '',
      bizSuggest: '',
      allLocs: [],
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.autoSuggest = this.autoSuggest.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  updateInput(field){
    return e => {
      // future feature: this.autoSuggest(field, e.target.value);
      return this.setState({
        [field]: e.target.value
      });
    };
  }

  autoSuggest(field, word){
    if (word){
      this.setState({
        [field+"Suggest"]: this.state.allLocs.filter( e => e.includes(word))
      });
    }else {
      this.setState({
        [field+"Suggest"]: ""
      });
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      allLocs: nextProps.allLocs
    });
  }


  handleSubmit(e){
   e.preventDefault();
   const keywords = Object.assign({}, this.state);

   if (keywords.bizName || keywords.loc){

     this.props.fetchFilteredBiz({keywords}).then(
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

  handleKeyDown(e){
    if ( e.keyCode === 40 ){
      console.log('do something');
    }
  }

  render(){
    const locSuggest = this.state.locSuggest ? this.state.locSuggest.map( (loc, idx) =>
      (<a href={ loc } key={ idx } > {loc} </a>)
    ) : "";

    return (
      <div className="search-wrap">
        <form onSubmit={this.handleSubmit} >
        <div className="search">
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

                  { locSuggest }
              </span>
            </div>
        </div>

        <button type="submit" className="search-icon">
            <MdSearch size={30} color='white'/>
        </button>
        </form>
      </div>
    );
  }
}

export default SearchMain;

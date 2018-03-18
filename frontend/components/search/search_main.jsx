import React from 'react';
import { MdSearch } from 'react-icons/lib/md';


class SearchMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bizName: '',
      loc: ''
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(field){
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
   e.preventDefault();
   const keywords = Object.assign({}, this.state);

   this.props.processForm({keywords}).then( this.props.history.push(`/business?bizName=${this.state.bizName}&loc=${this.state.loc}`)
   );

  }

  render(){
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
              </span>
            </div>
        </div>

        <div className="search-icon">
          <button type="submit"><MdSearch size={30} color='white'/></button>
        </div>
        </form>
      </div>
    );
  }
}

export default SearchMain;

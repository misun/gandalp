import React from 'react';

class AutoSuggest extends React.Component{
  constructor(props){
    super(props);

    this.state={
      value: this.props.value,
      autoSuggestions: [],
      allSuggestions: this.props.allSuggestions,
      divStyle: 'loc-suggest',
      limit: 7
    }

    this.autoSuggest = this.autoSuggest.bind(this);
  }

  autoSuggest(){
    const value = this.state.value.toLowerCase();

    if (value && value.length < 5 ){
      this.setState({
        autoSuggestions: this.state.allSuggestions.filter( e => e.toLowerCase().includes(value)),
        divStyle: 'loc-suggest show'
      });
    }else {
      this.setState({
        autoSuggestions: [],
        divStyle: 'loc-suggest'
      });
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value,
      allSuggestions: nextProps.allSuggestions,
      divStyle: nextProps.divStyle
    }, this.autoSuggest);
  }

  render(){
    const autoSuggestions = this.state.autoSuggestions ? this.state.autoSuggestions.map( (loc, idx) =>
      {
        if ( idx < this.state.limit ){
          return (
            <button
              key={ idx }
              onClick={this.props.onClick}
              value={ loc }
              style={{padding: "5px 0"}}>
              { loc }
            </button>);
        }
      }
    ) : "";

    return (
      <div className={ this.state.divStyle}>
        { autoSuggestions }
      </div>
    );
  }

}

export default AutoSuggest;

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
    // this.handleClick = this.handleClick.bind(this);
  }

  autoSuggest(){
    console.log(this.state.value);
    console.log(this.state.autoSuggestions);
    console.log(this.state.allSuggestions);

    if (this.state.value){
      this.setState({
        autoSuggestions: this.state.allSuggestions.filter( e => e.includes(this.state.value)),
        divStyle: 'loc-suggest show',
      });
    }else if( this.state.value === this.state.autoSuggestions[0]) {
      this.setState({
        autoSuggestions: []
      });
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value,
      allSuggestions: nextProps.allSuggestions
    }, this.autoSuggest);

  }

  render(){
    const autoSuggestions = this.state.autoSuggestions ? this.state.autoSuggestions.map( (loc, idx) =>
      {
        if ( idx < this.state.limit ){
          return (
            <button
              key={ idx }
              onClick={ this.props.onClick }
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

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(field){
    return e => this.setState({
      [field]: e.target.value
    });
  };

  handleSubmit(e){
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.updateInput('username')}
            value={this.state.username}
            placeholder='Email'
            /><br/>
          <input
            type='text'
            onChange={this.updateInput('password')}
            value={this.state.password}
            placeholder='Password'
            /><br/>
          <input
            type='submit'
            value={this.props.formType} /><br/>
          <h4>New to Selp? <Link to='/signup'>Sign up</Link></h4>

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);

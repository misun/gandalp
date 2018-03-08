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
          <fieldset className="form-fieldset">

            <div className="input">
              <input
                type='text'
                required='required'
                onChange={this.updateInput('username')}
                value={this.state.username}
                placeholder='Email' />
            </div>

            <div className="input">
              <input
                type='text'
                required='required'
                onChange={this.updateInput('password')}
                value={this.state.password}
                placeholder='Password' />
            </div>

            <div className='submit'>
              <button
                type='submit'
                value={this.props.formType} >Log In
              </button>
            </div>

            <div className='sub-text-box'>
              <small className='subtle-text'>New to Selp?
                <Link className='login-link' to='/signup'>Sign up</Link>
              </small>
            </div>

          </fieldset>

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);

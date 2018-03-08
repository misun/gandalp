import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      f_name: '',
      l_name: '',
      username: '',
      password: '',
      zip_code: ''
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
      <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>
          <fieldset className="form-fieldset">

            <div className="input">
              <input
                type='text'
                required='required'
                onChange={this.updateInput('f_name')}
                value={this.state.f_name}
                placeholder='First Name' />
            </div>

            <div className="input">
            <input
              type='text'
              required='required'
              onChange={this.updateInput('l_name')}
              value={this.state.l_name}
              placeholder='Last Name' />
            </div>

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

            <div className="input">
              <input
                type='text'
                onChange={this.updateInput('zip_code')}
                value={this.state.zip_code}
                placeholder='Zip Code'/>
            </div>
            <div className='submit'>
              <button
                type='submit'
                value={this.props.formType} >Sign Up
              </button>
            </div>

            <div className='sub-text-box'>
              <small className='subtle-text'>Already on Selp?
                <Link className='login-link' to='/login'>Log in</Link>
              </small>
            </div>


          </fieldset>

        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);

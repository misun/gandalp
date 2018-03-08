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
        <ul className='inline-layout'>
          <li>
            <label className='placeholder-sub'>First Name</label>
            <input
              type='text'
              required='required'
              onChange={this.updateInput('f_name')}
              value={this.state.f_name}
              placeholder='First Name' />
          </li>
          <li>
            <label className='placeholder-sub'>Last Name</label>
            <input
              type='text'
              required='required'
              onChange={this.updateInput('l_name')}
              value={this.state.l_name}
              placeholder='Last Name' />
          </li>

          <li>
            <label className='placeholder-sub'>Email</label>
            <input
              type='text'
              required='required'
              onChange={this.updateInput('username')}
              value={this.state.username}
              placeholder='Email' />
          </li>

          <li>
            <label className='placeholder-sub'>Password</label>
            <input
              type='text'
              required='required'
              onChange={this.updateInput('password')}
              value={this.state.password}
              placeholder='Password' />
          </li>

          <li>
            <label className='placeholder-sub'>Zip Code</label>
            <input
              type='text'
              onChange={this.updateInput('zip_code')}
              value={this.state.zip_code}
              placeholder='Zip Code'/>
          </li>
        </ul>
        <button
          type='submit'
          className='signup-btn'
          value={this.props.formType} >Sign Up</button>
        </form>
        <div className='sub-text-box'>
                <small className='subtle-text'>Already on Selp?
                  <Link className='login-link' to='/login'>Log in</Link>
                </small>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);

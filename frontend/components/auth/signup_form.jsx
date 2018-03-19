import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../layouts/header';

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
  }

  handleSubmit(e){
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user);
  }

  render(){
    const errors  = this.props.errors.session ? this.props.errors.session : "" ;

    return (
      <div>
        <main className="content">
          <section className="content-topbar">
            <div className='session-form'>
              <div className="session-header">
                <h2>Log In to Gandalp</h2>
                <h4>New to Gandalp? <Link className='login-link' to='/login'> Log in</Link></h4>

                <p>
                By logging in, you agree to Gandalp’s Terms of Service and Privacy Policy.
                </p>

                <p className="err-msg">{ errors }</p>
              </div>
              <hr align="center"/>

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
                      type='password'
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
                    <small className='subtle-text'>Already on Gandalp?
                      <Link className='login-link' to='/login'>Log in</Link>
                    </small>
                  </div>


                </fieldset>

              </form>
            </div>
          </section>

          <section className="content-bottombar">
              <div className="session-img">
              </div>
          </section>
        </main>
      </div>

    );
  }
}

export default withRouter(SignupForm);

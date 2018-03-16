import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from '../layouts/header';

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
  }

  handleSubmit(e){
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user);
  }

  render(){
    return (
      <div>
      <Header />
      <main className="content">
        <section className="content-topbar">
          <div className="session-form">
            <div className="session-header">
              <h2>Log In to Gandalp</h2>
              <h4>New to Gandalp? Sign up</h4>
              <p>
              By logging in, you agree to Gandalp’s Terms of Service and Privacy Policy.
              </p>
            </div>
            <hr align="center"/>

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
                    type='password'
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
                  <small className='subtle-text'>New to Gandalp?
                    <Link className='login-link' to='/signup'> Sign up</Link>
                  </small>
                </div>
              </fieldset>
            </form>
          </div>
        </section>

        <section className="content-bottombar">
            <img className="session-img" />
        </section>
      </main>
      </div>
    );
  }
}

export default withRouter(LoginForm);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  loginGuest(e){
    e.preventDefault();
    this.props.login({
      username: 'guest',
      password: 'starwars'
    });
  }

  render(){
    const user  = this.props.currentUser;

    let greet;

    if ( user ){
      greet = (
        <div className='header-profile'>
          <button onClick={this.handleLogout.bind(this)}>Log Out</button>

          {/* future feature <Link to={`/profile/${this.props.currentUser.id}`} >*/}
            <img className='header-thumb' src={this.props.currentUser.img_url} />
          {/*</Link>*/}
        </div>
      );
    }else if ( this.props.location.pathname === '/' ) {
      greet = (
        <React.Fragment>
        <a href='#' onClick={this.loginGuest.bind(this)}>Guest</a>
        <Link to={'/login'}>Log In</Link>
        <Link to={'/signup'} className="signup">Sign Up</Link>
        </React.Fragment>
      );
    }else{
      greet = (
        <Link to={'/signup'} className="signup">Sign Up</Link>
      );
    }

    return (
      <React.Fragment>
        { greet }
      </React.Fragment>
    );
  }
};

export default withRouter(Greeting);

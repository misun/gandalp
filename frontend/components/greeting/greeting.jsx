import React from 'react';
import { Link } from 'react-router-dom';

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
          <h1> welcome {this.props.currentUser.username} </h1>
          <button onClick={this.handleLogout.bind(this)}>Log Out</button>

          <Link to={`/profile/${this.props.currentUser.id}`} >
            <img className='header-thumb' src={this.props.currentUser.img_url} />
          </Link>
        </div>
      );
    }else {
      greet = (
        <ul className="header-list">
          <li>
            <a href='#' onClick={this.loginGuest.bind(this)}>Guest</a>
          </li>
          <li>
            <Link to={'/login'}>Log In</Link>
          </li>
          <li>
            <Link to={'/signup'}>Sign Up</Link>
          </li>
        </ul>
      );
    }

    return (
      <div className="header-nav-right">
        { greet }
      </div>
    );
  }
};

export default Greeting;

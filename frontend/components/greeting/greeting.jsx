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
        <div>
          <h1> welcome {this.props.currentUser.username}
          </h1>
          <button  onClick={this.handleLogout.bind(this)}>Log Out</button>
          <br/>
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
      <div>
        { greet }
      </div>
    );
  }
};

export default Greeting;

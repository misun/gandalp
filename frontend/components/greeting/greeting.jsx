import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  render(){
    if (this.props.currentUser){
        return (
          <div>
            <h1> welcome {this.props.currentUser.username}
            </h1>
            <button onClick={this.handleLogout.bind(this)}>Log Out</button>
            <br/>
          </div>
        );
      } else {
        return (
          <div>
            <Link to={'/signUp'}>Sign Up</Link>&nbsp;&nbsp;

            <Link to={'/login'}>Log In</Link>
          </div>
        );
      }
  }
};

export default Greeting;

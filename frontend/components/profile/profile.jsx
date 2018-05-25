import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.updateProfile.bind(this);
  }
  componentDidMount(){
    // this.props.fetchUser(this.props.match.params.userId);
  }

  updateProfile(e){
    e.preventDefault();
    alert('updateProfile');
  }

  render(){
    const { user } = this.props;
    return (
      <div className="profile">
        <header className="pf-hd">
          <div></div>
          <div className="pf-hd-1">
          </div>
          <div className="pf-hd-2"></div>
          <div className="pf-hd-3"></div>
          <div></div>
        </header>
        <article className="pf-body">
          <div></div>
          <div className="pf-body-1"></div>
          <div className="pf-body-2"></div>
          <div className="pf-body-3"></div>
          <div></div>
        </article>
      </div>
    );
  }
}

export default Profile;

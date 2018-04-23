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
        <div className="pf-fr1">
          <section className="profile-hd-thumb">
            <img src={ user.img_url } />
          </section>
        </div>
        <div className="pf-fr2">
          <h1>{ user.f_name + " " + user.l_name}</h1>
          <h4>{ user.zip_code }</h4>
          <ul>
            <li>Friends</li>
            <li>Reviews</li>
            <li>Photos</li>
          </ul>
        </div>
        <div className="pf-fr3">
          <ul>
            <li>
              <i className="material-icons md-18 md-blue">
                photo_camera
              </i>
              <a>Add Profile Photos</a>
            </li>
            <li>
              <i className="material-icons md-18 md-blue">
                mode_edit
              </i>
              <a onClick={this.updateProfile}>Update Your Profile</a>
            </li>
            <li>
              <i className="material-icons md-18 md-blue">
                group_add
              </i>
              <a>Find Friends</a>
            </li>
          </ul>
        </div>
        <div className="pf-fr4">
          <ul>
            <li>
              <i className="material-icons md-dark">person</i>
              Profile Overview
            </li>
            <li>
              <i className="material-icons md-dark">star</i>
              Reviews
            </li>
          </ul>
        </div>
        <div className="pf-fr5">
          
        </div>
        <div className="pf-fr6">
          <ul>
            <li>About { user.f_name + " " + user.l_name}</li>
            <li>Location</li>
            <li>Yelping Since</li>
            <li>Things I love</li>
          </ul>
          </div>
      </div>
    );
  }
}

export default Profile;

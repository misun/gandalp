import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.updateProfile.bind(this);
  }
  componentDidMount() {
    // this.props.fetchUser(this.props.match.params.userId);
  }

  updateProfile(e) {
    e.preventDefault();
    alert('updateProfile');
  }

  render() {
    const {user} = this.props;
    return (
      <div className="profile">
        <div className="bg-grey"></div>
        <div className="pf-wrapper">
          <div className="pf-1">
            <img src={ user.img_url } />
          </div>
          <div className="pf-2">
            <h1>{ user.f_name + " " + user.l_name}</h1>
            <h4>{ user.zip_code }</h4>
            <ul>
              <li>Friends</li>
              <li>Reviews</li>
              <li>Photos</li>
            </ul>
          </div>
          <div className="pf-3">
            <ul>
              {/* future feature<li>
                <i className="material-icons md-18 md-blue">
                  photo_camera
                </i>
                <a>Add Profile Photos</a>
              </li>*/}
              <li>
                <i className="material-icons md-18 md-blue">
                  mode_edit
                </i>
                <a onClick={this.updateProfile}>Update Your Profile</a>
              </li>
              {/*<li>
                <i className="material-icons md-18 md-blue">
                  group_add
                </i>
                <a>Find Friends</a>
              </li>*/}
            </ul>
          </div>
          <div className="pf-4">
            <ul>
              <li>
                <i className="material-icons md-dark">person</i>
                Profile Overview
              </li>
              <li>
                <i className="material-icons md-dark">star</i>
                Reviews
              </li>
              <li>
                <i className="material-icons md-dark">star</i>
                Friends
              </li>
            </ul>

          </div>
          <div className="pf-5"></div>
          <div className="pf-6">
            <ul>
              <li><h4>About { user.f_name + " " + user.l_name}</h4></li>
              <li>Location</li>
              <li>Yelping Since</li>
              <li>Things I love</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Profile;

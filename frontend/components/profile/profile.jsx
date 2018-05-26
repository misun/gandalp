import React from 'react';
import {Link} from 'react-router-dom';
import Overview from './overview';

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
    const { user } = this.props;
    const user_date = (new Date(user.created_at)).toLocaleDateString();
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
              <li>
                <i className="material-icons">stars</i>
                Reviews
              </li>
              <li>
                <i className="material-icons">camera_alt</i>
                Photos
              </li>
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
                <i class="material-icons md-blue">
                account_box
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
            </ul>

          </div>
          <div className="pf-5">
            <Overview />
          </div>
          <div className="pf-6">
            <ul>
              <li>
                <h3>About { user.f_name + " " + user.l_name}
                </h3>
              </li>
              <li>
                <h4>Location</h4>
                <p>{ user.zip_code }</p>
              </li>
              <li>
                <h4>Gandalping Since</h4>
                <p>{ user_date }</p>
              </li>
              <li>
                <h4>Things I love</h4>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Profile;

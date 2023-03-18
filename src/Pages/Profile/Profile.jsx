import React from 'react';
import './Profile.css';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src={`${PF}person/3.jpg`}
                alt=""
                className="profile-cover-image"
              />
              <img
                src={`${PF}posts/3.jpg`}
                alt=""
                className="profile-user-image"
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Kunal Gaur</h4>
              <span className="profile-info-desc">Hello, my friends</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}

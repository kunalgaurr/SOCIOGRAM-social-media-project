import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import './Profile.css';

import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  // const user = useContext(AuthContext);
  // const username = user.username;

  console.log(username, 'PAPAPAPPAPAPAPA');

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);

      setUser(res.data);
      return console.log(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <div>
      <Topbar />
      <div className="profile-container">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src={user.coverPicture || PF + 'person/cover.png'}
                alt=""
                className="profile-cover-image"
              />
              <img
                src={user.profilePicture || PF + 'person/profile.png'}
                alt=""
                className="profile-user-image"
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">{user.username}</h4>
              <span className="profile-info-desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

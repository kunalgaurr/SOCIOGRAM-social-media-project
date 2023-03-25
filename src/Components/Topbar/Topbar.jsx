import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Topbar.css';

export default function Topbar() {
  const user = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  console.log(user);
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Sociogram</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
          <span className="material-symbols-outlined search-icon">search</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search for friends, post or any video"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <span className="topbar-link">Homepage</span>
          </Link>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icon">
          <div className="topbar-icon-item">
            <span className="material-symbols-outlined">person</span>
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <span className="material-symbols-outlined">chat</span>
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <span className="material-symbols-outlined">notifications</span>
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/profile.png'
            }
            alt=""
            className="topbar-image"
          />
        </Link>
      </div>
    </div>
  );
}

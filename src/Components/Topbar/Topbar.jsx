import './Topbar.css';
import { Link } from 'react-router-dom';

export default function Topbar() {
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
          <span className="topbar-link">Homepage</span>
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
        <img src="/assets/person/1.jpg" alt="" className="topbar-image" />
      </div>
    </div>
  );
}

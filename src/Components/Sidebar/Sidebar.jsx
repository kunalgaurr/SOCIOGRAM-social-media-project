import './Sidebar.css';
import { Users } from '../../dummyData';
import CloseFriend from '../Friend/CloseFriend';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">rss_feed</span>
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">chat</span>
            <span className="sidebar-list-item-text">Chat</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">
              play_circle
            </span>
            <span className="sidebar-list-item-text">Video</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">groups</span>
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">bookmark</span>
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">help</span>
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">work</span>
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">event</span>
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <span className="material-symbols-outlined sidebar-icon">school</span>
            <span className="sidebar-list-item-text">Cources</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

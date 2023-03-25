import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img src="/assets/giftbox.png" alt="" className="birthday-image" />
          <span className="birthday-text">
            <b>Harshit Rathi</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="online-friend-list">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbae-title">User Information</h4>
        <div className="rightbat-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className="rightbar-title">User Friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img
              src={`${PF}person/1.jpg`}
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src={`${PF}person/2.jpg`}
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src={`${PF}person/3.jpg`}
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src={`${PF}person/4.jpg`}
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src={`${PF}person/5.jpg`}
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
          <div className="rightbar-following">
            <img
              src={`${PF}person/6.jpg`}
              alt=""
              className="rightbar-following-image"
            />
            <span className="rightbar-following-name">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
      <span className="footer-text">Terms of services</span>
      <span className="footer-text">Privacy Policy</span>
      <span className="footer-text">Cookie Policy</span>
      <span className="footer-text">Accessibility</span>
      <span className="footer-text">Ads info</span>
      <span className="footer-text">More</span>
      <p className="footer-text">A website by Kunal Gaur</p>
      <p className="footer-text">&copy; 2023 Sociogram, Inc</p>
    </div>
  );
}

import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';

export default function Rightbar({ profile }) {
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
        <img
          src="/assets/ads/3.jpg"
          alt="Cannot show ads"
          className="rightbar-ad"
        />
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
            <span className="rightbar-info-value">Dehradun</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">Delhi</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">Single</span>
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
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

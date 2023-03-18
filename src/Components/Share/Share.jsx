import './Share.css';

export default function Share() {
  return (
    <div className="share-container">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="./assets/person/1.jpg"
            alt=""
            className="share-profile-image"
          />
          <input
            className="share-input"
            placeholder="What's in your mind Kunal?"
          />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <span className="material-symbols-outlined share-icon">
                perm_media
              </span>
              <span className="share-option-text">Photo and Video</span>
            </div>
            <div className="share-option">
              <span className="material-symbols-outlined share-icon">label</span>
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <span className="material-symbols-outlined share-icon">room</span>
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <span className="material-symbols-outlined share-icon">
                add_reaction
              </span>
              <span className="share-option-text">Feelings</span>
            </div>
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

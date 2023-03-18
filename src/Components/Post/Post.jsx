import './Post.css';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="post-profile-image"
            />
            <span className="post-username">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img src={PF + post.photo} alt="" className="post-image" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              src={`${PF}like.png`}
              alt=""
              className="like-icon"
              onClick={likeHandler}
            />
            <img
              src={`${PF}heart.png`}
              alt=""
              className="like-icon"
              onClick={likeHandler}
            />
            <span className="like-counter">{like} people like it.</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

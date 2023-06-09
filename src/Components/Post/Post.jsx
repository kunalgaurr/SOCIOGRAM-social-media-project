import './Post.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);

      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture || PF + 'person/profile.png'}
                alt=""
                className="post-profile-image"
              />
            </Link>
            <span className="post-username">{user.username}</span>
            <span className="post-date">{format(user.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="post-image" />
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

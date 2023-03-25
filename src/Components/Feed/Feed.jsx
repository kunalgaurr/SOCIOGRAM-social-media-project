import { useEffect, useState } from 'react';
import axios from 'axios';

import Post from '../Post/Post';
import Share from '../Share/Share';

import './Feed.css';

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username
          ? await axios.get('/posts/profile/' + username)
          : await axios.get('/posts/timeline/6400dd696e9b2b3ed78d950c');

        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

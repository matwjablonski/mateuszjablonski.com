import React, { useState, useEffect } from 'react';
import request from '../helpers/request';

import Post from '../components/Post/Post';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    request.get('posts').then((data) => setPosts(data));
  }, []);

  return (
  <>{posts.length ? posts.map(post => <Post key={post.id} post={post} />) : 'brak postów'}</>
)}

export default Blog;

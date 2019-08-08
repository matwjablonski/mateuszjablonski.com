import React, { useState, useEffect } from 'react';
import request from '../helpers/request';

import PostSummary from '../components/Post/PostSummary';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    request.get('posts').then(res => setPosts(res.data.data));
  }, []);

  return (
    <>
      {posts.length
        ? posts.map(post => <PostSummary key={post.id} post={post} />)
        : 'brak postów'}
    </>
  );
};

export default Blog;

import React, { useState, useEffect } from 'react';
import { Grid } from '@smooth-ui/core-sc';

import PostSummary from '../components/Post/PostSummary';
import request from '../helpers/request';
import BigLoader from '../components/BigLoader/BigLoader';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    request.get('posts').then(res => setPosts(res.data.data));
  }, []);
  return (
    <Grid>
      {posts.length ? (
        posts.map(post => <PostSummary key={post.id} post={post} />)
      ) : (
        <BigLoader text="Trwa ładowanie postów." />
      )}
    </Grid>
  );
};

export default Home;

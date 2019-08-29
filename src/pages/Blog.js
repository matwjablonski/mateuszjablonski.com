import React, { useState, useEffect } from 'react';
import request from '../helpers/request';
import { useTranslation } from 'react-i18next';

import PostSummary from '../components/Post/PostSummary';
import BigLoader from '../components/BigLoader/BigLoader';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    request()
      .get('posts')
      .then(res => setPosts(res.data.data));
  }, []);

  return (
    <>
      {posts.length ? (
        posts.map(post => <PostSummary key={post.id} post={post} />)
      ) : (
        <BigLoader text={t('NOTIFICATIONS.POSTS_LOADING')} />
      )}
    </>
  );
};

export default Blog;

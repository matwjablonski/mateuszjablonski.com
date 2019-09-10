import React, { useState, useEffect } from 'react';
import request from '../helpers/request';
import { useTranslation } from 'react-i18next';

import PostSummary from '../components/Post/PostSummary';
import BigLoader from '../components/BigLoader/BigLoader';
import { Head } from '../components/Head/Head';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    request()
      .get('posts')
      .then(res =>
        res.data.data.sort((a, b) => {
          if (a.creationDate > b.creationDate) {
            return -1;
          }
          if (a.creationDate < b.creationDate) {
            return 1;
          }
          return 0;
        })
      )
      .then(res => setPosts(res));
  }, []);

  return (
    <>
      <Head />
      {posts.length ? (
        posts.map(post => <PostSummary key={post.id} post={post} />)
      ) : (
        <BigLoader text={t('NOTIFICATIONS.POSTS_LOADING')} />
      )}
    </>
  );
};

export default Blog;

import React, { useState, useEffect } from 'react';
import { Grid } from '@smooth-ui/core-sc';

import PostSummary from '../components/Post/PostSummary';
import { requestCollection } from '../helpers/request';
import BigLoader from '../components/BigLoader/BigLoader';
import { useTranslation } from 'react-i18next';
import { Head } from '../components/Head/Head';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    requestCollection('posts')
      .then(res =>
        res.sort((a, b) => {
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
    // request()
    //   .get('posts')
    //   .then(res =>
    //     res.data.data.sort((a, b) => {
    //       if (a.creationDate > b.creationDate) {
    //         return -1;
    //       }
    //       if (a.creationDate < b.creationDate) {
    //         return 1;
    //       }
    //       return 0;
    //     })
    //   )
    //   .then(res => setPosts(res));
  }, []);
  return (
    <Grid>
      <Head />
      {posts.length ? (
        posts.map(post => <PostSummary key={post.id} post={post} />)
      ) : (
        <BigLoader text={t('NOTIFICATIONS.POSTS_LOADING')} />
      )}
    </Grid>
  );
};

export default Home;

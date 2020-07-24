import React, { useEffect, useState } from 'react';
import { requestDocBy } from '../helpers/request';

import Post from '../components/Post/Post';
import { Head } from '../components/Head/Head';

const BlogPost = props => {
  const {
    match: { params },
  } = props;

  const [post, setPost] = useState(null);

  useEffect(() => {
    requestDocBy('posts', 'slug', params.slug)
      .then(res => setPost(res));
  }, [params.slug]);

  return post ? (
    <>
      <Head type="post" title={post.title} />
      <Post post={post} />
    </>
  ) : null;
};

export default BlogPost;

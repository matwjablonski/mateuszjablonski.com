import React, { useEffect, useState } from 'react';
// import request from '../helpers/request';

import Post from '../components/Post/Post';
import { Head } from '../components/Head/Head';

const BlogPost = props => {
  const {
    match: { params },
  } = props;

  const [post, setPost] = useState(null);

  useEffect(() => {
    // request()
    //   .get(`post/slug/${params.slug}`)
    //   .then(res => setPost(res.data));
  }, [params.slug]);

  return post ? (
    <>
      <Head type="post" title={post.title} />
      <Post post={post} />
    </>
  ) : null;
};

export default BlogPost;

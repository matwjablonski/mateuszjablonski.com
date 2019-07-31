import React from 'react';

import { PostTitle } from './Post.style'

const Post = ({ post }) => (
  <article>
    <PostTitle>{post.title}</PostTitle>
  </article>
)

export default Post;

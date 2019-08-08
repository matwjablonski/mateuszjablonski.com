import React from 'react';

import { PostSummaryStyle, PostTitle, PostExcerpt } from './Post.style';
import PostCover from './PostCover';
import FromMarkdown from '../FromMarkdown/FromMarkdown';

import { SimpleButton } from '../ui/SimpleButton';

const PostSummary = ({ post }) => (
  <PostSummaryStyle>
    <PostTitle>{post.title}</PostTitle>
    <PostCover coverImage={post.coverImage} />
    <PostExcerpt>
      <FromMarkdown text={post.excerpt || ''} />
    </PostExcerpt>
    <SimpleButton to={`blog/${post.slug}`}>Continue reading</SimpleButton>
  </PostSummaryStyle>
);

export default PostSummary;

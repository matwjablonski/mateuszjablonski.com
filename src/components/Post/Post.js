import React from 'react';

import { PostTitle, PostContent, PostFooter } from './Post.style';
import PostCover from './PostCover';
import FromMarkdown from '../FromMarkdown/FromMarkdown';
import { ExternalLink } from '../ui/ExternalLink';

const Post = ({ post }) => (
  <article>
    <PostTitle>{post.title}</PostTitle>
    <PostCover coverImage={post.coverImage} />
    <PostContent>
      <FromMarkdown text={post.content || ''} />
    </PostContent>
    <PostFooter>
      <ExternalLink href={post.repositoryUrl}>Sprawdź kod w repozytorium</ExternalLink>
      <ExternalLink href={post.demoUrl}>Zobacz działające demo</ExternalLink>
    </PostFooter>
  </article>
);

export default Post;

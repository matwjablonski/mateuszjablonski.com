import React from 'react';
import { PostCoverImage, PostCoverImageSource } from './Post.style';

import { Figure, Figcaption } from '../ui/Figure';
import { ExternalLink } from '../ui/ExternalLink';

const PostCover = ({
  coverImage: { url, name, author, authorUrl, source, sourceUrl },
}) => {
  return (
    <Figure>
      <PostCoverImage src={url} alt={`${name} by ${author}`} />
      <PostCoverImageSource>from {source}</PostCoverImageSource>
      <Figcaption>
        <ExternalLink href={sourceUrl}>{name}</ExternalLink>
        &nbsp;by&nbsp;
        <ExternalLink href={authorUrl}>{author}</ExternalLink>
      </Figcaption>
    </Figure>
  );
};

export default PostCover;

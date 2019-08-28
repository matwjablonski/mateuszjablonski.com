import React from 'react';
import { PostCoverImage, PostCoverImageSource } from './Post.style';

import { Figure, Figcaption } from '../ui/Figure';
import { ExternalLink } from '../ui/ExternalLink';
import { useTranslation } from 'react-i18next';

const PostCover = ({
  coverImage: { url, name, author, authorUrl, source, sourceUrl },
}) => {
  const { t } = useTranslation();
  return (
    <Figure>
      <PostCoverImage
        src={url}
        alt={`${name} ${t('PAGES.POST.COVER_THUMBNAL.BY_WHOM')} ${author}`}
      />
      <PostCoverImageSource>from {source}</PostCoverImageSource>
      <Figcaption>
        <ExternalLink href={sourceUrl}>{name}</ExternalLink>
        &nbsp;{t('PAGES.POST.COVER_THUMBNAL.BY_WHOM')}&nbsp;
        <ExternalLink href={authorUrl}>{author}</ExternalLink>
      </Figcaption>
    </Figure>
  );
};

export default PostCover;

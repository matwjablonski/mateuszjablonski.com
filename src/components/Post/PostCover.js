import React from 'react';
import { NewPostLabel, PostCoverImage, PostCoverImageSource } from './Post.style';

import { Figcaption, OverflowFigure } from '../ui/Figure';
import { ExternalLink } from '../ui/ExternalLink';
import { useTranslation } from 'react-i18next';

const PostCover = ({
  coverImage: { url, name, author, authorUrl, source, sourceUrl },
                     daysFromToday
}) => {
  const { t } = useTranslation();
  return (
    <OverflowFigure>
      <PostCoverImage
        src={url}
        alt={`${name} ${t('PAGES.POST.COVER_THUMBNAIL.BY_WHOM')} ${author}`}
      />
      {daysFromToday < 3 && <NewPostLabel>{t('PAGES.POST.COVER_THUMBNAIL.NEW')}</NewPostLabel> }
      <PostCoverImageSource>from {source}</PostCoverImageSource>
      <Figcaption>
        <ExternalLink href={sourceUrl}>{name}</ExternalLink>
        &nbsp;{t('PAGES.POST.COVER_THUMBNAIL.BY_WHOM')}&nbsp;
        <ExternalLink href={authorUrl}>{author}</ExternalLink>
      </Figcaption>
    </OverflowFigure>
  );
};

export default PostCover;

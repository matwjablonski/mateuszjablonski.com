import React from 'react';
import { useTranslation } from 'react-i18next';
import { PostSummaryStyle, PostTitle, PostExcerpt } from './Post.style';
import PostCover from './PostCover';
import FromMarkdown from '../FromMarkdown/FromMarkdown';

import { SimpleButton } from '../ui/SimpleButton';

const PostSummary = ({ post }) => {
  const { t } = useTranslation();

  return (
    <PostSummaryStyle>
      <PostTitle>{post.title}</PostTitle>
      <PostCover coverImage={post.coverImage} />
      <PostExcerpt>
        <FromMarkdown text={post.excerpt || ''} />
      </PostExcerpt>
      <SimpleButton to={`blog/${post.slug}`}>
        {t('PAGES.POST.READ_MORE')}
      </SimpleButton>
    </PostSummaryStyle>
  );
};

export default PostSummary;

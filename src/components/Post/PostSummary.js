import React, { useContext } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import {
  PostSummaryStyle,
  PostTitle,
  PostExcerpt,
  PostMeta,
  PostMetaData,
  PostAuthorImage,
  PostAuthorName,
  PostDate,
} from './Post.style';
import PostCover from './PostCover';
import FromMarkdown from '../FromMarkdown/FromMarkdown';

import { SimpleButton } from '../ui/SimpleButton';
import { MeContext } from '../../meContext';

const PostSummary = ({ post }) => {
  const { t } = useTranslation();
  const me = useContext(MeContext);

  return (
    <PostSummaryStyle>
      <PostTitle>{post.title}</PostTitle>
      <PostCover coverImage={post.coverImage} />
      <PostMeta>
        <PostAuthorImage
          src={`https://www.gravatar.com/avatar/${me.avatar.hash}?s=40`}
          alt={post.author || me.name}
        />
        <PostMetaData>
          <PostAuthorName>{post.author || me.name}</PostAuthorName>
          <PostDate>
            {post.creationDate &&
              moment(post.creationDate).format('DD.MM.YYYY')}
          </PostDate>
        </PostMetaData>
      </PostMeta>
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

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
  PostLink,
} from './Post.style';
import PostCover from './PostCover';
import FromMarkdown from '../FromMarkdown/FromMarkdown';

import { PrimarySimpleButton } from '../ui/SimpleButton';
import { MeContext } from '../../meContext';

const PostSummary = ({ post }) => {
  const { t } = useTranslation();
  const me = useContext(MeContext);

  const daysFromToday = moment().diff(post.creationDate, 'days');

  return (
    <PostSummaryStyle>
      <PostLink to={`blog/${post.slug}`}>
        <PostTitle>{post.title}</PostTitle>
      </PostLink>
      <PostCover daysFromToday={daysFromToday} coverImage={post.coverImage} />
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
      <PrimarySimpleButton to={`blog/${post.slug}`}>
        {t('PAGES.POST.READ_MORE')}
      </PrimarySimpleButton>
    </PostSummaryStyle>
  );
};

export default PostSummary;

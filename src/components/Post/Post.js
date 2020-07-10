import React from 'react';

import { PostTitle, PostContent, PostFooter, PostFooterTitle } from './Post.style';
import PostCover from './PostCover';
import FromMarkdown from '../FromMarkdown/FromMarkdown';
import { ExternalLink } from '../ui/ExternalLink';
import { useTranslation } from 'react-i18next';

const Post = ({ post }) => {
  const { t } = useTranslation();

  return (
    <article>
      <PostTitle>{post.title}</PostTitle>
      <PostCover coverImage={post.coverImage}/>
      <PostContent>
        <FromMarkdown text={post.content || ''}/>
      </PostContent>
      <PostFooter>
        <PostFooterTitle>{t('PAGES.POST.ADDITIONAL_MATERIALS')}</PostFooterTitle>
        {post.repositoryUrl && <ExternalLink href={post.repositoryUrl}>{t('PAGES.POST.REPO_URL')}</ExternalLink>}
        {post.demoUrl && <ExternalLink href={post.demoUrl}>{t('PAGES.POST.DEMO_URL')}</ExternalLink>}
      </PostFooter>
    </article>
  );
};

export default Post;

import React from 'react';

import { PostTitle, PostContent, PostFooter, PostFooterTitle, PostNewsletterBox } from './Post.style';
import PostCover from './PostCover';
import FromMarkdown from '../FromMarkdown/FromMarkdown';
import { ExternalLink } from '../ui/ExternalLink';
import { useTranslation } from 'react-i18next';
import { MediumTitle } from '../ui/Title';
import { SmallText } from '../ui/Text';
import Newsletter from '../Newsletter/Newsletter';

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
      <PostNewsletterBox>
        <MediumTitle>{t('GENERAL.NEWSLETTER.SUBSCRIBE')}</MediumTitle>
        <SmallText>{t('GENERAL.NEWSLETTER.DESCRIPTION')}</SmallText>
        <Newsletter/>
      </PostNewsletterBox>
    </article>
  );
};

export default Post;

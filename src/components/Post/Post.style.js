import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom';

import { PageTitleHeadline } from '../PageTitle/PageTitle.style';

export const PostSummaryStyle = styled.article`
  max-width: 900px;
  margin: 0 auto;
`;

export const PostLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const PostTitle = styled(PageTitleHeadline)`
  font-family: ${th('mainFont')};
  font-weight: 700;
`;

export const PostFooterTitle = styled(PostTitle)`
  margin-top: 1em;
`;

export const PostMeta = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1em;
`;

export const PostAuthorImage = styled.img`
  border-radius: 50%;
  margin-right: 1em;
`;

export const PostMetaData = styled.div``;

export const PostAuthorName = styled.p`
  color: ${th('lightGrey')};
  font-family: ${th('mainFont')};
  font-size: 0.8em;
  margin-top: 0;
  margin-bottom: 0.5em;
`;

export const PostDate = styled.div`
  color: ${th('darkGrey')};
  font-family: ${th('mainFont')};
  font-size: 0.8em;
`;

export const PostCoverImage = styled.img`
  border: 1px solid ${th('lighterGrey')};
  border-radius: ${th('borderRadius')};
  height: 400px;
  object-fit: cover;
  width: 100%;
`;

export const PostCoverImageSource = styled.span`
  color: white;
  font-size: 0.7em;
  line-height: 1;
  padding: 10px 15px;
  position: absolute;
  top: 0;
  transform: rotate(90deg);
  transform-origin: left top;
  white-space: nowrap;
`;

export const PostExcerpt = styled.div`
  font-family: ${th('mainFont')};
`;

export const PostContent = styled.div`
  font-family: ${th('mainFont')};
  font-size: 1.1em;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 800px;

  img {
    max-width: 100%;
  }
`;

export const PostFooter = styled.div`
  background: ${th('lighterGrey')};
  display: flex;
  flex-direction: column;
  margin: 2em auto 0;
  max-width: 800px;
  padding: 1em 2em 2em;
`;

export const PostNewsletterBox = styled.div`
  margin: 2em auto 0;
  max-width: 800px;
  padding: 1em;
`;

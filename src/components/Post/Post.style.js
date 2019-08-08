import styled from "styled-components";
import { th } from "@smooth-ui/core-sc";

import { PageTitleHeadline } from "../PageTitle/PageTitle.style";

export const PostSummaryStyle = styled.article`
  max-width: 900px;
  margin: 0 auto;
`;

export const PostTitle = styled(PageTitleHeadline)`
  font-family: ${th("mainFont")};
  font-weight: 700;
`;

export const PostCoverImage = styled.img`
  border: 1px solid ${th("lighterGrey")};
  border-radius: ${th("borderRadius")};
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
  font-family: ${th("mainFont")};
`;

export const PostContent = styled.div`
  font-family: ${th("mainFont")};
  font-size: 1.3em;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 800px;

  img {
    max-width: 100%;
  }
`;

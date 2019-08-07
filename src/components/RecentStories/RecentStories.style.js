import styled from "styled-components";
import { th } from "@smooth-ui/core-sc";

export const RecentStoriesWrapper = styled.section`
  background: ${th("white")};
  border-top: 1px solid ${th("lighterGrey")};
  bottom: 0;
  box-shadow: 0 5px 15px 0 ${th("darkGrey")};
  padding: 1em 0;
  position: fixed;
  width: 100%;
`;


export const RecentStoriesHeadline = styled.h3`
  font-family: ${th('mainFont')};
  margin: 0;
  max-width: 100px;
  line-height: 1;
  font-size: 1.3em;

  &::after {
    background: ${th('primary')};
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 5px;
    margin-left: 5px;
    width: 5px;
  }
`;

import styled from "styled-components";
import { th } from "@smooth-ui/core-sc";

export const RecentStoriesWrapper = styled.section`
  background: ${th("white")};
  border-top: 1px solid ${th("lighterGrey")};
  bottom: 0;
  box-shadow: 0 0 7px 0 ${th("darkGrey")};
  padding: 1em 0;
  position: fixed;
  width: 100%;
`;

import styled from "styled-components";
import { th } from "@smooth-ui/core-sc";

export const Figure = styled.figure`
  margin: 1em 0;
  position: relative;
`;

export const Figcaption = styled.figcaption`
  color: ${th("lightGrey")};
  font-family: ${th("mainFont")};
  font-size: 0.8rem;
  text-align: center;
`;

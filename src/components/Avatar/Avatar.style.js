import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const AvatarImageBox = styled.div`
  align-items: center;
  border: 1px solid ${th('lightGrey')};
  border-radius: 50%;
  display: flex;
  font-size: ${th('rootSize')};
  height: 136px;
  justify-content: center;
  margin: 4em auto 2em;
  transition: ${th('coreTiming')};
  width: 136px;
  
  &:hover {
    border-color: ${th('darkGrey')};
    transition: ${th('coreTiming')};
  }
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  height: 130px;
  border: 1px solid transparent;
`;

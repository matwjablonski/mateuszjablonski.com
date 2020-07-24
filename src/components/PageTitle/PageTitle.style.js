import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const PageTitleHeadline = styled.h2`
  display: inline-block;
  font-size: 23px;
  font-family: ${th('mainFont')};
  margin-top: 45px;
  padding-bottom: 15px;
  position: relative;

  &::before {
    background: ${th('darkGrey')};
    border-radius: 50%;
    bottom: -2px;
    content: '';
    display: block;
    height: 6px;
    position: absolute;
    width: 6px;
  }

  &::after {
    background: linear-gradient(to right, ${th('darkGrey')}, transparent);
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    width: 100%;
  }
`;

export const PageTitleWithAvatar = styled.div`
  display: flex;
`;

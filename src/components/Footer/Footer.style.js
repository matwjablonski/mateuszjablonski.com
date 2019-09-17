import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${th('lighterGrey')};
  display: flex;
  justify-content: space-between;
  padding-bottom: 55px;
`;

export const FooterLink = styled(Link)`
  color: ${th('lightGrey')};
  display: inline-block;
  font-family: ${th('mainFont')};
  font-size: 14px;
  line-height: 1.6;
  padding-bottom: 35px;
  margin-top: 1em;
  margin-left: 10px;
  text-decoration: none;
`;

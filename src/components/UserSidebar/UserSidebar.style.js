import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';
import { UserBarLink } from '../UserBar/UserBar.style';

export const UserSidebarWrapper = styled.div`
  background: ${th('black')};
  margin-top: 45px;
`;

export const UserSidebarLink = styled(UserBarLink)`
  border-bottom: 1px solid ${th('black')};
  display: block;
  min-width: 200px;
  opacity: 1;
`;

export const UserSidebarSeparator = styled.div`
  color: ${th('white')};
  padding: 0.5em 1em;
  min-width: 200px;
`;

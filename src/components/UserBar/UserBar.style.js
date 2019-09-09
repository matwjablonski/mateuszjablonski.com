import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { th } from '@smooth-ui/core-sc';

export const UserBarWrapper = styled.div`
  background: ${th('black')};
  color: ${th('white')};
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const UserBarLink = styled(NavLink)`
  background: ${th('darkGrey')};
  color: ${th('white')};
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: ${th('coreTiming')};

  &:hover {
    background: ${th('lightGrey')};
    transition: ${th('coreTiming')};
  }
`;

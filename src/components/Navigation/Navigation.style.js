import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { th } from '@smooth-ui/core-sc';

export const NavigationBar = styled.div`
  align-items: center;
  border-bottom: 1px solid ${th('lighterGrey')};
  display: flex;
  height: 62px;
`;

export const NavigationNameLink = styled(Link)`
  color: ${th('black')};
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;

  &::after {
    background: ${th('primary')};
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 7px;
    margin-left: 7px;
    width: 7px;
  }
`;

export const NavigationNavLink = styled(NavLink)`
  color: ${th('darkGrey')};
  font-size: 12px;
  margin: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color ${th('coreTiming')};

  &:last-child {
    margin-right: 0;  
  }

  &:hover {
    color: ${th('black')};
    transition: color ${th('coreTiming')};
  }
`;

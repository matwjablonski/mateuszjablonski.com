import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { th, Select } from '@smooth-ui/core-sc';

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
  font-family: ${th('mainFont')};
  text-decoration: none;

  &::after {
    background: ${th('primary')};
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 7px;
    margin-left: 7px;
    width: 7px;
  }
`;

export const NavigationNavLink = styled(NavLink)`
  color: ${th('darkGrey')};
  font-size: 12px;
  font-family: ${th('mainFont')};
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

export const NavigationSidebarToggler = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 30px;
  margin: 0 8px 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 30px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${th('primary')};
    transition: all linear ${th('coreTiming')}
  }

  &.isSidebarOpen {
    color: ${th('primary')};
  }
`;

export const LanguageSelector = styled(Select)`
  margin-left: 10px;
  margin-right: 10px;
`;

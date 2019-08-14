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
  height: 16px;
  margin: 0 8px 0 15px;
  padding: 0;
  position: relative;
  width: 30px;

  &:focus {
    outline: none;
  }

  &::before {
    background: ${th('darkGrey')};
    border-radius: 1px;
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::after {
    background: ${th('darkGrey')};
    border-radius: 1px;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    transition: ${th('coreTiming')};
    width: 100%;
  }

  &:hover {
    &::before,
    &::after {
      transition: ${th('coreTiming')};
      width: 70%;
    }
  }

  span {
    background: ${th('darkGrey')};
    border-radius: 1px;
    display: block;
    height: 2px;
    opacity: 1;
    transition: ${th('coreTiming')};
    width: 100%;
  }

  &.isSidebarOpen {
    span {
      opacity: 0;
      transition: ${th('coreTiming')};
    }

    &::before {
      transform: rotate(45deg);
      transform-origin: top left;
      width: 80%;
    }

    &::after {
      transform: rotate(-45deg);
      transform-origin: top right;
      top: 0;
      right: 14px;
      width: 80%;
    }

    &:hover {
      &::before,
      &::after {
        transition: ${th('coreTiming')};
        width: 80%;
      }
    }
  }
`;

import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const Title = styled.h3`
  display: inline-block;
  font-size: 19px;
  font-family: ${th('mainFont')};
  margin-top: 15px;
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

export const MediumTitle = styled.h4`
  display: inline-block;
  font-size: 17px;
  font-family: ${th('mainFont')};
  margin-top: 15px;
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

export const SmallTitle = styled.h5`
  display: inline-block;
  font-size: 14px;
  font-family: ${th('mainFont')};
  margin-top: 15px;
  margin-bottom: 0;
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

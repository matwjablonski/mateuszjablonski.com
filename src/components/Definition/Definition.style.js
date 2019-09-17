import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const DefinitionBox = styled.div`
  padding: 10px 0;
  margin: 0 auto 10px;
  max-width: 100%;
  width: 750px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${th('lighterGrey')};
  }
`;

export const DefinitionEntryBox = styled.div`
  display: flex;
`;

export const DefinitionFirst = styled.div`
  align-items: center;
  background: ${th('primary')};
  color: ${th('white')};
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 10px;
  margin-top: 5px;
  text-transform: uppercase;
  width: 40px;
`;

export const DefinitionEntry = styled.h3`
  display: inline-block;
  font-size: 18px;
  font-family: ${th('mainFont')};
  margin-top: 0;
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

export const DefinitionSmall = styled.small`
  color: ${th('darkGrey')};
  display: block;
`;

export const DefinitionText = styled.p`
  font-family: ${th('mainFont')};
  font-size: 1em;
  margin-top: 0.5em;
`;

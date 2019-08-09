import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../ui/Text';
import { th } from '@smooth-ui/core-sc';

const UpsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4em 0;
  text-align: center;

  svg {
    color: ${th('darkGrey')};
    margin-bottom: 30px;
  }
`;

const Ups = ({ text }) => (
  <UpsWrapper>
    <FontAwesomeIcon icon={faBomb} size="10x" />
    <Text>{text}</Text>
  </UpsWrapper>
);

export default Ups;

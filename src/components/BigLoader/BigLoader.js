import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../ui/Text';
import { th } from '@smooth-ui/core-sc';

const BigLoaderWrapper = styled.div`
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

const BigLoader = ({ text }) => (
  <BigLoaderWrapper>
    <FontAwesomeIcon icon={faMagic} size="10x" />
    <Text>{text}</Text>
  </BigLoaderWrapper>
);

export default BigLoader;

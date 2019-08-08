import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { th } from '@smooth-ui/core-sc';

export const SimpleButton = styled(Link)`
  color: ${th('darkGrey')};
  font-family: ${th('mainFont')};
  font-size: 1em;
  font-weight: 700;
  text-decoration: none;
  transition: ${th('coreTiming')};

  &:hover {
    color: ${th('lightGrey')};
    transition: ${th('coreTiming')};
  }
`;

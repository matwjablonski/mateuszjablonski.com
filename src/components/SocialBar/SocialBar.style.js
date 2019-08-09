import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const SocialBarWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 0.5em 0 3em 0;

  a {
    color: ${th('darkGrey')};
    margin: 0 1em;
    transition: color ${th('coreTiming')};

    &:hover {
      color: ${th('lightGrey')};
      transition: color ${th('coreTiming')};
    }
  }
`;

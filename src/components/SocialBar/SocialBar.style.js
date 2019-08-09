import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const SocialBarWrapper = styled.section`
  border-bottom: 1px solid ${th('lighterGrey')};
  display: flex;
  justify-content: center;
  margin: 0 auto 0.5em;
  max-width: 100%;
  padding: 0.5em 0 4.5em 0;
  width: 600px;

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

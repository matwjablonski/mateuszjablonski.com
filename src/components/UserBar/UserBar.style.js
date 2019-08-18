import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const UserBarWrapper = styled.div`
  background: ${th('black')};
  color: ${th('white')};
  padding: 0.5em 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
`;

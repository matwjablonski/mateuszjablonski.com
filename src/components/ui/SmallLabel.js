import { Label } from '@smooth-ui/core-sc';
import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const SmallLabel = styled(Label)`
  color: ${th('lightGrey')};
  font-size: 0.8em;
  font-weight: 700;
  margin-bottom: -8px;
  text-transform: uppercase;
`;

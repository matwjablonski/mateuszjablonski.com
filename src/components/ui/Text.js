import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const Text = styled.p`
  font-family: ${th('mainFont')};
  font-size: 14px;
  line-height: 1.6;
  padding-bottom: 35px;
`;

export const SmallText = styled(Text)`
  padding-bottom: 15px;
`;

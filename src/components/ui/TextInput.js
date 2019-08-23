import { Input } from '@smooth-ui/core-sc';
import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const TextInput = styled(Input)`
  border: 1px solid ${th('lighterGrey')};
  line-height: 1.6;
  padding: 10px 15px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

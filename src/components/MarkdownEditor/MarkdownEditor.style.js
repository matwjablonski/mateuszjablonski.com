import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const MarkdownEditorTextarea = styled.textarea`
  border: 1px solid ${th('lighterGrey')};
  height: ${props => props.height || '100vh'};
  line-height: 1.6;
  max-width: 100%;
  min-height: ${props => props.height || '700px'};
  min-width: 100%;
  padding: 15px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

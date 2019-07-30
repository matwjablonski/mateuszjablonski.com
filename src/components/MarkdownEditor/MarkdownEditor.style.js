import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const MarkdownEditorTextarea = styled.textarea`
  border: 1px solid ${th('lighterGrey')};
  height: 100vh;
  max-width: 100%;
  min-height: 700px;
  min-width: 100%;
  padding: 15px;
  width: 100%;

  &:focus {
    outline: 0;
  }
`;

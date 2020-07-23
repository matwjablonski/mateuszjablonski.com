import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const NewsletterBox = styled.div`
  background: ${th('lighterGrey')};
  border-radius: ${th('borderRadius')};
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 32px;
  padding: ${th('bigGutter')} ${th('gutter')} ${th('gutter')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  input {
    margin-top: ${th('mediumGutter')};
  }
  
  button {
    margin-top: ${th('gutter')};
    width: 100%;
  }
`;

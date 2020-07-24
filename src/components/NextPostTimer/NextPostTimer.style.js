import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const NextPostTimerBox = styled.div`
  background: url("/images/timer.png");
  background-size: cover;
  border-radius: ${th('borderRadius')};
  border: 1px solid ${th('lighterGrey')};
  height: 300px;
  margin-top: ${th('bigGutter')};
  margin-bottom: ${th('mediumGutter')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextPostTimerTitle = styled.h4`
  font-size: 30px;
  color: ${th('darkGrey')};
  font-family: ${th('mainFont')};
  padding: 2em;
  text-align: center;
  
  span {
    color: ${th('primary')};
  }
`;

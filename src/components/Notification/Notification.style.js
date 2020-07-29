import styled from 'styled-components';
import { th } from '@smooth-ui/core-sc';

export const NotificationBox = styled.div`
  position: fixed;
  color: ${th('white')};
  top: ${th('gutter')};
  left: ${th('gutter')};
  background: ${props => th(props.status)};
  display: flex;
  z-index: 9;
  opacity: .8;
  padding: ${th('gutter')};
  align-items: center;
  
  span {
    margin-left: ${th('smallGutter')};
  }
`;

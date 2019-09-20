import styled from 'styled-components';

export const BadgeWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Badge = styled.div`
  font-weight: 700;
  margin-right: 10px;

  &:after {
    content: ':';
  }
`;

import React from 'react';
import styled from 'styled-components';

const ExternalLinkStyle = styled.a`
  color: inherit;
`;

export const ExternalLink = ({ href, children }) => (
  <ExternalLinkStyle href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </ExternalLinkStyle>
);

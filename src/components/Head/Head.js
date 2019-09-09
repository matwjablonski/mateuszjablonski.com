import React from 'react';
import { Helmet } from 'react-helmet';

const getCustomTitle = (type, title) => {
  const prefix = 'Mateusz Jabłoński';
  const suffix = 'Blog';
  switch (type) {
    case 'post':
      return `${prefix} - ${title} - ${suffix}`;
    default:
      return `${prefix} - ${suffix}`;
  }
};

export const Head = ({ type, title }) => (
  <Helmet>
    <title>{getCustomTitle(type, title)}</title>
  </Helmet>
);

import React from 'react';
import { useTranslation } from 'react-i18next';
import { BlogDescriptionBox } from './BlogDescription.style';

const BlogDescription = () => {
  const { t } = useTranslation();

  return <BlogDescriptionBox>{t('GENERAL.HEADER.DESCRIPTION')}</BlogDescriptionBox>;
};

export default BlogDescription;

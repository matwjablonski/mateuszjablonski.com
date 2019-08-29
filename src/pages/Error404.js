import React from 'react';
import { useTranslation } from 'react-i18next';

const Error404 = () => {
  const { t } = useTranslation();

  return <>{t('PAGES.404.TITLE')}</>;
};

export default Error404;

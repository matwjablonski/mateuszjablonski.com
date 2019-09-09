import React from 'react';
import { useTranslation } from 'react-i18next';
import { Head } from '../components/Head/Head';

const Error404 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head type="page" title={t('PAGES.404.TITLE')} />
      {t('PAGES.404.TITLE')}
    </>
  );
};

export default Error404;

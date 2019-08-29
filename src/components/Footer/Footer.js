import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@smooth-ui/core-sc';

import { FooterWrapper } from './Footer.style';
import { Text } from '../ui/Text';
import RecentStories from '../RecentStories/RecentStories';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid>
        <FooterWrapper>
          <Text>{t('GENERAL.FOOTER.COPY')}</Text>
        </FooterWrapper>
      </Grid>
      <RecentStories />
    </>
  );
};

export default Footer;

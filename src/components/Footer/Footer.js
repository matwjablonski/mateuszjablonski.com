import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@smooth-ui/core-sc';

import { FooterWrapper, FooterLink } from './Footer.style';
import { Text } from '../ui/Text';
import RecentStories from '../RecentStories/RecentStories';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid>
        <FooterWrapper>
          <Text>{t('GENERAL.FOOTER.COPY')}</Text>

          <div>
            <FooterLink to="/slownik">
              {t('GENERAL.FOOTER.NAV.GLOSSARY')}
            </FooterLink>
            <FooterLink to="/p/polityka-prywatnosci">
              {t('GENERAL.FOOTER.NAV.PRIVACY_POLICY')}
            </FooterLink>
          </div>
        </FooterWrapper>
      </Grid>
      <RecentStories />
    </>
  );
};

export default Footer;

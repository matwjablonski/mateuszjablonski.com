import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import {
  NavigationBar,
  NavigationNameLink,
  NavigationNavLink,
  NavigationSidebarToggler,
  LanguageSelector,
} from './Navigation.style';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = ({ sidebarToggler, isSidebarOpen }) => {
  const { t } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavigationBar>
      <Grid>
        <Row justifyContent="space-between">
          <Col xs="auto">
            <NavigationNameLink to="/">Mateusz Jabłoński</NavigationNameLink>
          </Col>
          <Col xs="auto">
            <Row alignItems="center">
              <NavigationNavLink to="/">
                {t('GENERAL.NAV.HOME')}
              </NavigationNavLink>
              <NavigationNavLink to="/blog">
                {t('GENERAL.NAV.BLOG')}
              </NavigationNavLink>
              <NavigationNavLink to="/kontakt">
                {t('GENERAL.NAV.CONTACT')}
              </NavigationNavLink>
              <LanguageSelector
                scale="xs"
                size="sm"
                defaultValue={i18n.language}
                onChange={e => changeLanguage(e.target.value)}
              >
                <option value="pl">{t('GENERAL.LANGUAGES.PL')}</option>
                <option value="en">{t('GENERAL.LANGUAGES.EN')}</option>
              </LanguageSelector>

              <NavigationSidebarToggler
                onClick={() => sidebarToggler(!isSidebarOpen)}
                className={isSidebarOpen && 'isSidebarOpen'}
              >
                <FontAwesomeIcon icon={faFingerprint} size="2x"/>
              </NavigationSidebarToggler>
            </Row>
          </Col>
        </Row>
      </Grid>
    </NavigationBar>
  );
};

export default Navigation;

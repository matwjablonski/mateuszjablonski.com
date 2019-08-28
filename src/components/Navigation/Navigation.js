import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  NavigationBar,
  NavigationNameLink,
  NavigationNavLink,
  NavigationSidebarToggler,
} from './Navigation.style';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

const Navigation = ({ sidebarToggler, isSidebarOpen }) => {
  const { t } = useTranslation();
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
              <NavigationSidebarToggler
                onClick={() => sidebarToggler(!isSidebarOpen)}
                className={isSidebarOpen && 'isSidebarOpen'}
              >
                <span />
              </NavigationSidebarToggler>
            </Row>
          </Col>
        </Row>
      </Grid>
    </NavigationBar>
  );
};

export default Navigation;

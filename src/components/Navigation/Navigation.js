import React from 'react';
import {
  NavigationBar,
  NavigationNameLink,
  NavigationNavLink,
  NavigationSidebarToggler,
} from './Navigation.style';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

const Navigation = ({ sidebarToggler, isSidebarOpen }) => {
  return (
    <NavigationBar>
      <Grid>
        <Row justifyContent="space-between">
          <Col xs="auto">
            <NavigationNameLink to="/">Mateusz Jabłoński</NavigationNameLink>
          </Col>
          <Col xs="auto">
            <Row alignItems="center">
              <NavigationNavLink to="/">Home</NavigationNavLink>
              <NavigationNavLink to="/blog">Blog</NavigationNavLink>
              <NavigationNavLink to="/kontakt">Kontakt</NavigationNavLink>
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

import React from 'react';
import { NavigationBar, NavigationNameLink, NavigationNavLink } from './Navigation.style';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

const Navigation = () => (
  <NavigationBar>
    <Grid>
      <Row justifyContent="space-between">
        <Col xs="auto">
          <NavigationNameLink to="/">Mateusz Jabłoński</NavigationNameLink>
        </Col>
        <Col xs="auto">
          <NavigationNavLink to="/">Home</NavigationNavLink>
          <NavigationNavLink to="/blog">Blog</NavigationNavLink>
          <NavigationNavLink to="/nauka-programowania">Ucz się ze mną</NavigationNavLink>
          <NavigationNavLink to="/kontakt">Kontakt</NavigationNavLink>
          <NavigationNavLink to="/panel">Twój panel</NavigationNavLink>
        </Col>
      </Row>
      
    </Grid>
  </NavigationBar>
)

export default Navigation;

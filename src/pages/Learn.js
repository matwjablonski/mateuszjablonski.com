import React from 'react';
import { Row, Col } from '@smooth-ui/core-sc';

import PageTitle from '../components/PageTitle/PageTitle';
import P from '../components/ui/P';

const Learn = () => (
  <React.Fragment>
    <Row justifyContent="center">
      <Col xs={4}>
        <PageTitle text="Wybierz swoją ścieżkę"/>
        <ul>
          <li>Wordpress<br/>zarządzaj treściami na swojej stronie jak profesjonalista</li>
          <li>Woocommerce<br/>skuteczny handel w sieci</li>
          <li>Webdeveloper oraz Webdeveloper +<br/>współpraca z Kodillą</li>
          <li>Zajęcia indywidualne dla dzieci</li>
        </ul>
      </Col>
      <Col xs={8}>
        <P>lorem ipsum</P>
      </Col>
    </Row>
  </React.Fragment>
)

export default Learn;

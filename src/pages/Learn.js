import React from 'react';
import { Row, Col } from '@smooth-ui/core-sc';

import PageTitle from '../components/PageTitle/PageTitle';
import P from '../components/ui/P';

const Learn = () => (
  <React.Fragment>
    <Row justifyContent="center">
      <Col xs={4}>
        <PageTitle text="Wybierz swoją ścieżkę" />
      </Col>
      <Col xs={8}>
        <P>lorem ipsum</P>
      </Col>
    </Row>
  </React.Fragment>
);

export default Learn;

import React from 'react';
import { Row, Col } from '@smooth-ui/core-sc';

import PageTitle from '../components/PageTitle/PageTitle';
import { Text } from '../components/ui/Text';

const Learn = () => (
  <React.Fragment>
    <Row justifyContent="center">
      <Col xs={4}>
        <PageTitle text="Wybierz swoją ścieżkę" />
      </Col>
      <Col xs={8}>
        <Text>lorem ipsum</Text>
      </Col>
    </Row>
  </React.Fragment>
);

export default Learn;

import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

import PageTitle from '../components/PageTitle/PageTitle';

const Contact = () => (
  <Grid>
    <Row justifyContent="center">
      <Col xs={8}>
        <PageTitle text="Kontakt"/>
      </Col>
    </Row>
  </Grid>
)

export default Contact;

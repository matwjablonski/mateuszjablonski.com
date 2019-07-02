import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

import Loading from './Loading';
import { LoadingText } from './Loading.style';

const LoadingWrapper = () => (
  <Grid>
    <Row justifyContent="center">
      <Col xs="auto">
        <Loading/>
        <LoadingText>Trwa ładowanie</LoadingText>
      </Col>
    </Row>
  </Grid>
)

export default LoadingWrapper;

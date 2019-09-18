import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';

import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';

const User = () => {
  const { t } = useTranslation();
  return (
    <Grid>
      <Row>
        <Col xs="auto">
          <UserSidebar />
        </Col>
        <Col>
          <PageTitle text={t('ADMIN.USER_VIEW.TITLE')} />
        </Col>
      </Row>
    </Grid>
  );
};

export default User;

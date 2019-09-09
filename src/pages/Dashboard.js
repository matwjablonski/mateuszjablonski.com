import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Grid>
      <Row>
        <Col xs="auto">
          <UserSidebar />
        </Col>
        <Col>
          <PageTitle text={t('ADMIN.DASHBOARD.TITLE')} />
        </Col>
      </Row>
    </Grid>
  );
};

export default Dashboard;

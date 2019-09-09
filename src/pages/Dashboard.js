import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import { Head } from '../components/Head/Head';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <Grid>
      <Head type="page" title={t('ADMIN.DASHBOARD.TITLE')} />
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

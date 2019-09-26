import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import { Head } from '../components/Head/Head';
import { UserContext } from '../userContext';
import { CoursantDashboard } from '../components/CoursantDashboard/CoursantDashboard';
import { Text } from '../components/ui/Text';

const Dashboard = () => {
  const { t } = useTranslation();
  const context = useContext(UserContext);
  const { user } = context;

  const switchView = () => {
    switch (user.userType) {
      case 'mentor':
        return 'mentor';
      case 'coursant':
        return <CoursantDashboard course={user.course} />;
      case 'reader':
      default:
        return null;
    }
  };

  return (
    <Grid>
      <Head type="page" title={t('ADMIN.DASHBOARD.TITLE')} />
      <Row>
        <Col xs="auto">
          <UserSidebar />
        </Col>
        <Col>
          <PageTitle text={t('ADMIN.DASHBOARD.TITLE')} />
          <Text>{t('ADMIN.DASHBOARD.DESCRIPTION')}</Text>
          {user && switchView()}
        </Col>
      </Row>
    </Grid>
  );
};

export default Dashboard;

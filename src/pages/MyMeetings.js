import React, { useContext } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import Ups from '../components/Ups/Ups';
import { UserContext } from '../userContext';
import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import { useTranslation } from 'react-i18next';
import { MediumTitle } from '../components/ui/Title';

const MyMeetings = () => {
  const { t } = useTranslation();
  const userData = useContext(UserContext);

  const { user } = userData;

  return user.userType === 'coursant' ? (
    <Grid>
      <Row>
        <Col xs="auto">
          <UserSidebar />
        </Col>
        <Col>
          <PageTitle text={t('ADMIN.MY_MEETINGS.TITLE')} />
          <Row>
            <Col>
              <MediumTitle>{t('ADMIN.MY_MEETINGS.NEXT_MEETING')}</MediumTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <MediumTitle>{t('ADMIN.MY_MEETINGS.PREV_MEETINGS')}</MediumTitle>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  ) : (
    <Ups text={t('ERRORS.WITHOUT_PERMISSION')} />
  );
};

export default MyMeetings;

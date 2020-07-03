import React, { useState, useContext, useEffect } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import Ups from '../components/Ups/Ups';
import { UserContext } from '../userContext';
import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import { useTranslation } from 'react-i18next';
import { MediumTitle } from '../components/ui/Title';
// import requests from '../helpers/request';
import moment from 'moment';
import { convertTimeToTransalateString, isDateInPast } from '../helpers/date';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faStopwatch,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';
import { BadgeWrapper, Badge } from '../components/ui/Badge';

const MyMeetings = () => {
  const { t } = useTranslation();
  const [meetings, setMeetings] = useState(null);
  const userData = useContext(UserContext);

  const { user } = userData;

  useEffect(() => {
    // u>ser.course &&
      // requests()
      //   .get(`course/id/${user.course}`)
      //   .then(res => {
      //     setMeetings(res.data.meetings);
      //   });
  }, [user]);

  moment.relativeTimeThreshold('h', 24 * 26);

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
              {meetings && (
                <>
                  <BadgeWrapper>
                    <Badge>
                      <FontAwesomeIcon icon={faClock} size="2x" />
                    </Badge>
                    {moment(meetings.nextMeeting).format('DD.MM.YYYY HH:mm')}
                  </BadgeWrapper>
                  <BadgeWrapper>
                    <Badge>
                      {isDateInPast(meetings.nextMeeting) ? (
                        <FontAwesomeIcon icon={faHistory} size="2x" />
                      ) : (
                        <FontAwesomeIcon icon={faStopwatch} size="2x" />
                      )}
                    </Badge>
                    {convertTimeToTransalateString(
                      moment(meetings.nextMeeting).fromNow()
                    )}
                  </BadgeWrapper>
                </>
              )}
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

import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Row, Col } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';
// import requests from '../../helpers/request';
import { Badge, BadgeWrapper } from '../ui/Badge';
import { MediumTitle } from '../ui/Title';

export const CoursantDashboard = ({ course }) => {
  const { t } = useTranslation();
  const [activeCourse, setActiveCourse] = useState(null);

  useEffect(() => {
    // requests()
    //   .get(`course/id/${course}`)
    //   .then(res => setActiveCourse(res.data));
  }, [course]);

  console.log(activeCourse);

  const allMeetingsInActiveCourse =
    activeCourse && activeCourse.meetings && activeCourse.meetings.contracted
      ? activeCourse.meetings.contracted
      : 0;

  const completedMeetings =
    activeCourse && activeCourse.meetings
      ? activeCourse.meetings.completed.length
      : 0;

  const fullCourseStats = completedMeetings / allMeetingsInActiveCourse;

  return (
    <>
      {activeCourse && (
        <>
          <Row>
            <Col>
              <MediumTitle>{t('ADMIN.DASHBOARD.YOUR_COURSE')}</MediumTitle>
              <BadgeWrapper>
                <Badge>{t('ADMIN.DASHBOARD.ACTIVE_COURSE')}</Badge>
                {activeCourse.title}
              </BadgeWrapper>
              <BadgeWrapper>
                <Badge>{t('ADMIN.DASHBOARD.MEETINGS_IN')}</Badge>
                {completedMeetings}/{allMeetingsInActiveCourse}
              </BadgeWrapper>
            </Col>
            <Col xs={12} md={3}>
              <CircularProgressbar
                value={fullCourseStats}
                maxValue={1}
                text={`${fullCourseStats * 100}%`}
                styles={buildStyles({
                  trailColor: '#eee',
                  pathColor: `rgba(255, 20, 43, ${fullCourseStats})`,
                  textColor: `rgba(255, 20, 43, ${
                    fullCourseStats === 0 ? 0.1 : fullCourseStats
                  })`,
                })}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <MediumTitle>{t('ADMIN.DASHBOARD.ACTIVE_MODULE')}</MediumTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <MediumTitle>{t('ADMIN.DASHBOARD.HOMEWORK')}</MediumTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <MediumTitle>{t('ADMIN.DASHBOARD.LAST_GLOSSARY')}</MediumTitle>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

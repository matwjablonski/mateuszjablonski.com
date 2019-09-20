import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';

import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import request from '../helpers/request';
import axios from 'axios';
import moment from 'moment';
import { BadgeWrapper, Badge } from '../components/ui/Badge';
import { MediumTitle } from '../components/ui/Title';

const User = props => {
  const { t } = useTranslation();
  const [user, setUser] = useState();

  const { action, id } = props.match.params;

  useEffect(() => {
    let source = axios.CancelToken.source();
    try {
      request()
        .get(`users/userId/${id}`, {
          cancelToken: source.token,
        })
        .then(res => {
          setUser(res.data);
        });
    } catch (err) {
      if (axios.isCancel(err)) {
        throw err;
      }
    }

    return () => {
      source.cancel();
    };
  }, [id]);

  console.log(action, user);
  return (
    <Grid>
      <Row>
        <Col xs="auto">
          <UserSidebar />
        </Col>
        <Col>
          {user ? (
            <>
              <PageTitle text={`${t('ADMIN.USER_VIEW.TITLE')} ${user.name}`} />
              <Row>
                <Col>
                  <MediumTitle>{t('ADMIN.USER_VIEW.GENERAL')}</MediumTitle>
                </Col>
              </Row>
              <Row>
                <Col>
                  <BadgeWrapper>
                    <Badge>{t('ADMIN.USER_VIEW.USER_TYPE')}</Badge>
                    {t(`ADMIN.USER.${user.userType.toUpperCase()}`)}
                  </BadgeWrapper>
                  <BadgeWrapper>
                    <Badge>{t('ADMIN.USER_VIEW.DATE_OF_BIRTH')}</Badge>
                    {moment(user.dateOfBirth).format('DD.MM.YYYY')}
                  </BadgeWrapper>
                </Col>
                <Col>
                  <BadgeWrapper>
                    <Badge>{t('ADMIN.USER_VIEW.EMAIL')}</Badge>
                    {user.email}
                  </BadgeWrapper>
                  <BadgeWrapper>
                    <Badge>{t('ADMIN.USER_VIEW.PHONE')}</Badge>
                    {user.phoneNumber}
                  </BadgeWrapper>
                </Col>
              </Row>
              {user.userType === 'coursant' && (
                <Row>
                  <Col>
                    <MediumTitle>
                      {t('ADMIN.USER_VIEW.YOUR_PROGRESS')}
                    </MediumTitle>
                  </Col>
                </Row>
              )}
              <Row>
                <Col>
                  <MediumTitle>{t('ADMIN.USER_VIEW.PERMISSIONS')}</MediumTitle>
                </Col>
              </Row>
              <Row>
                {user.permissions.map(permission => (
                  <Col key={permission.toLowerCase()}>{permission}</Col>
                ))}
              </Row>
            </>
          ) : null}
        </Col>
      </Row>
    </Grid>
  );
};

export default User;

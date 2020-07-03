import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import {
  Grid,
  Row,
  Col,
  Modal,
  Button,
  ModalDialog,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';

import PageTitle from '../components/PageTitle/PageTitle';
import { PageTitleWithAvatar } from '../components/PageTitle/PageTitle.style';
import { MiniAvatarImage } from '../components/Avatar/Avatar.style';
import UserSidebar from '../components/UserSidebar/UserSidebar';
// import request from '../helpers/request';
import axios from 'axios';
import moment from 'moment';
import { ButtonWithMargin } from '../components/ui/Button';
import { BadgeWrapper, Badge } from '../components/ui/Badge';
import { MediumTitle, SmallTitle } from '../components/ui/Title';

const User = props => {
  const { t } = useTranslation();
  const [user, setUser] = useState();
  const [toggled, onToggle] = useState(false);

  const { action, id } = props.match.params;

  useEffect(() => {
    let source = axios.CancelToken.source();
    try {
      // request()
      //   .get(`users/userId/${id}`, {
      //     cancelToken: source.token,
      //   })
      //   .then(res => {
      //     setUser(res.data);
      //   });
    } catch (err) {
      if (axios.isCancel(err)) {
        throw err;
      }
    }

    return () => {
      source.cancel();
    };
  }, [id]);

  const handleAddNewMeeting = values => {
    // requests()
    //   .put(`course/newMeeting/${user.course}`, values)
    //   .then(() => {
    //     onToggle(false);
    //   });
  };

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
              <Row>
                <Col xs="auto" mr="auto">
                  <PageTitleWithAvatar>
                    <MiniAvatarImage src="//placehold.it/50x50" alt="" />
                    <PageTitle
                      text={`${t('ADMIN.USER_VIEW.TITLE')} ${user.name}`}
                    />
                  </PageTitleWithAvatar>
                </Col>
                <Col xs="auto" style={{ marginTop: '50px' }}>
                  {user.userType === 'coursant' && (
                    <ButtonWithMargin onClick={() => onToggle(true)}>
                      {t('ADMIN.USER_VIEW.NEW_MEETING')}
                    </ButtonWithMargin>
                  )}
                  <ButtonWithMargin variant="secondary">
                    {t('ADMIN.USER_VIEW.EDIT')}
                  </ButtonWithMargin>
                </Col>
              </Row>
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
                    {user.dateOfBirth
                      ? moment(user.dateOfBirth).format('DD.MM.YYYY')
                      : t('ADMIN.USER_VIEW.NO_BIRTH_DATE')}
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
      <Modal opened={toggled} onClose={() => onToggle(false)}>
        <ModalDialog>
          <Formik
            initialValues={{
              meetingDate: moment()
                .add(1, 'days')
                .format('YYYY-MM-DD'),
              meetingTime: '18:00',
            }}
            onSubmit={handleAddNewMeeting}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <ModalContent border="none" overflow="hidden">
                  <ModalHeader border="none">
                    <SmallTitle>
                      {t('ADMIN.USER_VIEW.NEW_MEETING_FORM.TITLE')}
                    </SmallTitle>
                  </ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label htmlFor="form-group-meeting-date">
                            {t('ADMIN.USER_VIEW.NEW_MEETING_FORM.DATE.LABEL')}
                          </Label>
                          <Input
                            control
                            value={values.meetingDate}
                            id="form-group-meeting-date"
                            type="date"
                            name="meetingDate"
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label htmlFor="form-group-meeting-date">
                            {t('ADMIN.USER_VIEW.NEW_MEETING_FORM.TIME.LABEL')}
                          </Label>
                          <Input
                            control
                            value={values.meetingTime}
                            id="form-group-meeting-time"
                            type="time"
                            name="meetingTime"
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button type="submit">
                      {t('ADMIN.USER_VIEW.NEW_MEETING_FORM.SAVE')}
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </form>
            )}
          </Formik>
        </ModalDialog>
      </Modal>
    </Grid>
  );
};

export default User;

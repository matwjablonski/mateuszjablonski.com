import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Button, Input } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';
import { NewsletterBox } from './Newsletter.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { request } from '../../helpers/request';
import { NotificationContext } from '../../notificationContext';

const Newsletter = () => {
  const { t } = useTranslation();
  const notification = useContext(NotificationContext);

  const handleSubscribe = ({ email }) => {
    const {
      REACT_APP_MAILCHIMP_DATA_CENTER,
      REACT_APP_MAILCHIMP_LIST_ID,
      REACT_APP_MAILCHIMP_API_KEY,
    } = process.env;
    const url = `https://${REACT_APP_MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/${REACT_APP_MAILCHIMP_LIST_ID}/members`;
    request(
      url,
      { email_address: email, status: 'subscribed' },
      REACT_APP_MAILCHIMP_API_KEY,
    ).then(
      _ => {
        notification.setNotification({
          status: 'success',
          message: `${email} został zapisany poprawnie`
        });
      }
    ).catch(err => {
      notification.setNotification({
        status: 'error',
        message: `Nie można zapisać adresu ${email}`
      })
    });
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={handleSubscribe}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <NewsletterBox>
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            <Input
              control
              id="form-group-email"
              type="email"
              name="email"
              placeholder={t('GENERAL.NEWSLETTER.PLACEHOLDER')}
              onChange={handleChange}
            />
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              {t('GENERAL.NEWSLETTER.SUBMIT')}
            </Button>
          </NewsletterBox>
        </form>
      )}
    </Formik>
  );
};

export default Newsletter;

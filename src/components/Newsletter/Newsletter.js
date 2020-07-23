import React from 'react';
import { Formik } from 'formik';
import { Button, Input } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';
import { NewsletterBox } from './Newsletter.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { request } from '../../helpers/request';

const Newsletter = () => {
  const { t } = useTranslation();

  const handleSubscribe = (value) => {
    const {
      REACT_APP_MAILCHIMP_DATA_CENTER,
      REACT_APP_MAILCHIMP_LIST_ID,
      REACT_APP_MAILCHIMP_API_KEY
    } = process.env;
    const url = `https://${REACT_APP_MAILCHIMP_DATA_CENTER}.api.mailchimp.com/3.0/lists/${REACT_APP_MAILCHIMP_LIST_ID}/members`;
    request(
      url,
      value,
      REACT_APP_MAILCHIMP_API_KEY
    ).then((res) => {
      console.log(res);
    })
  };

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={handleSubscribe}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <NewsletterBox>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
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

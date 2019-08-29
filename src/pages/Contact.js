import React from 'react';
import { Row, Col } from '@smooth-ui/core-sc';

import PageTitle from '../components/PageTitle/PageTitle';
import { Text } from '../components/ui/Text';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Row justifyContent="center">
        <Col xs={8}>
          <PageTitle text={t('PAGES.CONTACT.TITLE')} />
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col xs={8}>
          <Text>{t('PAGES.CONTACT.DESCRIPTION')}</Text>
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col xs={8}>
          <Row>
            <Col xs={6}>
              <PageTitle text={t('PAGES.CONTACT.CALL')} />
            </Col>
            <Col xs={6}>
              <PageTitle text={t('PAGES.CONTACT.WRITE')} />
            </Col>
            <Col xs={6}>
              <Text>+48 794 566 403</Text>
              <Text>{t('PAGES.CONTACT.CALL_DESCRIPTION')}</Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col xs={8}>
          <PageTitle text={t('PAGES.CONTACT.SOCIAL_MEDIA')} />
        </Col>
      </Row>
      <Row justifyContent="center">
        <Col xs={8}>
          <PageTitle text={t('PAGES.CONTACT.NEWSLETTER')} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Contact;

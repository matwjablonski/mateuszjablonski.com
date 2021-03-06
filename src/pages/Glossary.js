import React, { useEffect, useState } from 'react';
import { Col, Row } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';

// import request from '../helpers/request';
import { Head } from '../components/Head/Head';
import BigLoader from '../components/BigLoader/BigLoader';
import PageTitle from '../components/PageTitle/PageTitle';
import { Definition } from '../components/Definition/Definition';
import { requestCollection } from '../helpers/request';

const Glossary = () => {
  const [definitions, setDefinitions] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    requestCollection('glossary')
      .then(res =>
        res.sort((a, b) => {
          if (a.entry > b.entry) {
            return 1;
          }
          if (a.entry < b.entry) {
            return -1;
          }
          return 0;
        }),
      )
      .then(res => setDefinitions(res));
  }, []);

  return (
    <React.Fragment>
      <Head/>
      <Row justifyContent="center">
        <Col xs={8}>
          <PageTitle text={t('PAGES.GLOSSARY.TITLE')}/>
        </Col>
        <Col xs={8}>
          {definitions.length ? (
            definitions.map(def => <Definition key={def.id} def={def}/>)
          ) : (
            <BigLoader text={t('NOTIFICATIONS.POSTS_LOADING')}/>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Glossary;

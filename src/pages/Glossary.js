import React, { useEffect, useState } from 'react';
import { Grid } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';

// import request from '../helpers/request';
import { Head } from '../components/Head/Head';
import BigLoader from '../components/BigLoader/BigLoader';
import PageTitle from '../components/PageTitle/PageTitle';
import { Definition } from '../components/Definition/Definition';

const Glossary = () => {
  const [definitions, setDefinitions] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    // request()
    //   .get('glossary')
    //   .then(res =>
    //     res.data.data.sort((a, b) => {
    //       if (a.entry > b.entry) {
    //         return 1;
    //       }
    //       if (a.entry < b.entry) {
    //         return -1;
    //       }
    //       return 0;
    //     })
    //   )
    //   .then(res => setDefinitions(res));
  }, []);

  return (
    <Grid>
      <Head />
      <PageTitle text={t('PAGES.GLOSSARY.TITLE')} />
      {definitions.length ? (
        definitions.map(def => <Definition key={def.id} def={def} />)
      ) : (
        <BigLoader text={t('NOTIFICATIONS.POSTS_LOADING')} />
      )}
    </Grid>
  );
};

export default Glossary;

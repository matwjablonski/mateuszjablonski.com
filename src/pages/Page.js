import React, { useEffect, useState } from 'react';
import { requestDoc } from '../helpers/request';
import { Head } from '../components/Head/Head';
import { Col, Row } from '@smooth-ui/core-sc';
import PageTitle from '../components/PageTitle/PageTitle';

const Page = props => {
  const {
    match: { params },
  } = props;

  const [content, setContent] = useState(null);

  useEffect(() => {
    requestDoc('pages', params.slug)
      .then(res => setContent(res));
  }, [params.slug]);

  return content && (
    <React.Fragment>
      <Head type="page" title={content.title}/>
      <Row justifyContent="center">
        <Col xs={8}>
          <PageTitle text={content.title}/>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Page;

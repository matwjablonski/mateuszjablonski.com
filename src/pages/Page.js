import React, { useEffect, useState } from 'react';
import { requestDoc } from '../helpers/request';
import { Head } from '../components/Head/Head';
import { Col, Row } from '@smooth-ui/core-sc';
import PageTitle from '../components/PageTitle/PageTitle';
import FromMarkdown from '../components/FromMarkdown/FromMarkdown';
import { PostContent } from '../components/Post/Post.style';

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
        <Col xs={8}>
          <PostContent>
            <FromMarkdown text={content.content || ''}/>
          </PostContent>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Page;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { requestCollectionBy } from '../../helpers/request';

import {
  RecentStoriesWrapper,
  RecentStoriesHeadline,
  RecentStoriesLine,
  RecentStoryLink,
  RecentStoryBox,
  RecentStory,
} from './RecentStories.style';

const RecentStories = () => {
  const [recentStories, getRecentStories] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    requestCollectionBy('posts')
      .then(res => getRecentStories(res));
  }, []);

  return (
    <RecentStoriesWrapper>
      <Grid>
        <Row alignItems="center">
          <Col xs="auto" mr="auto">
            <RecentStoriesHeadline>
              {t('GENERAL.FOOTER.LAST_ON_BLOG')}
            </RecentStoriesHeadline>
          </Col>
          <Col xs="auto">
            <RecentStoriesLine>
              {recentStories.length > 0
                ? recentStories.map((story, index) => (
                    <RecentStoryLink
                      key={story.id}
                      to={`/blog/${story.slug}`}
                      style={{
                        zIndex: `${recentStories.length - index}`,
                      }}
                    >
                      <RecentStoryBox>
                        <RecentStory src={story.coverImage.squareUrl} />
                      </RecentStoryBox>
                    </RecentStoryLink>
                  ))
                : null}
            </RecentStoriesLine>
          </Col>
        </Row>
      </Grid>
    </RecentStoriesWrapper>
  );
};

export default RecentStories;

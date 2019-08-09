import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import request from '../../helpers/request';

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

  useEffect(() => {
    request
      .get('posts/recentStories')
      .then(res => getRecentStories(res.data.data));
  }, []);

  return (
    <RecentStoriesWrapper>
      <Grid>
        <Row alignItems="center">
          <Col xs="auto" mr="auto">
            <RecentStoriesHeadline>Recent stories</RecentStoriesHeadline>
          </Col>
          <Col xs="auto">
            <RecentStoriesLine>
              {recentStories.length > 0
                ? recentStories.map((story, index) => (
                    <RecentStoryLink
                      to={`/blog/${story.slug}`}
                      style={{
                        marginRight: `${-20 * index}px`,
                        zIndex: `${recentStories.length - index}`,
                      }}
                    >
                      <RecentStoryBox>
                        <RecentStory src={story.image} />
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

import React from 'react';
import { Grid } from '@smooth-ui/core-sc';

import {
  RecentStoriesWrapper,
  RecentStoriesHeadline,
} from './RecentStories.style';

const RecentStories = () => {
  return (
    <RecentStoriesWrapper>
      <Grid>
        <RecentStoriesHeadline>Recent stories</RecentStoriesHeadline>
      </Grid>
    </RecentStoriesWrapper>
  );
};

export default RecentStories;

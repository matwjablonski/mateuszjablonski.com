import React from 'react';
import { Grid } from '@smooth-ui/core-sc';

import { FooterWrapper } from './Footer.style';
import { Text } from '../ui/Text';
import RecentStories from '../RecentStories/RecentStories';

const Footer = () => (
  <>
    <Grid>
      <FooterWrapper>
        <Text>&copy; 2019 Mateusz Jabłoński</Text>
      </FooterWrapper>
    </Grid>
    <RecentStories />
  </>
);

export default Footer;

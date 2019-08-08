import React from 'react';
import { Grid } from '@smooth-ui/core-sc';

import { FooterWrapper } from './Footer.style';
import P from '../ui/P';
import RecentStories from '../RecentStories/RecentStories';

const Footer = () => (
  <>
    <Grid>
      <FooterWrapper>
        <P>&copy; 2019 Mateusz Jabłoński</P>
      </FooterWrapper>
    </Grid>
    <RecentStories />
  </>
);

export default Footer;

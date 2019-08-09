import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Grid } from '@smooth-ui/core-sc';

import { SocialBarWrapper } from './SocialBar.style';

const SocialBarIcon = ({ link, icon }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} size="lg" />
  </a>
);

const SocialBar = () => (
  <Grid>
    <SocialBarWrapper>
      <SocialBarIcon link="" icon={faFacebookSquare} />
      <SocialBarIcon link="https://github.com/matwjablonski" icon={faGithub} />
      <SocialBarIcon link="" icon={faLinkedin} />
      <SocialBarIcon link="" icon={faTwitter} />
      <SocialBarIcon link="" icon={faInstagram} />
    </SocialBarWrapper>
  </Grid>
);

export default SocialBar;

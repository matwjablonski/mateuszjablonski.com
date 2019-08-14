import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faLastfm,
  faStackOverflow,
  faCodepen,
  faMedium,
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
      <SocialBarIcon
        link="https://www.linkedin.com/in/mateusz-jablonski/"
        icon={faLinkedin}
      />
      <SocialBarIcon link="" icon={faTwitter} />
      <SocialBarIcon
        link="https://www.instagram.com/mat.w.jablonski"
        icon={faInstagram}
      />
      <SocialBarIcon link="https://last.fm/user/reeb89" icon={faLastfm} />
      <SocialBarIcon
        link="https://stackoverflow.com/users/5757095/mateusz-jabłoński"
        icon={faStackOverflow}
      />
      <SocialBarIcon link="https://codepen.io/matwjablonski" icon={faCodepen} />
      <SocialBarIcon link="" icon={faMedium} />
    </SocialBarWrapper>
  </Grid>
);

export default SocialBar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faInstagram,
  faStackOverflow,
  faCodepen,
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
      <SocialBarIcon
        link="https://www.facebook.com/blogmateuszjablonski/"
        icon={faFacebookSquare}
      />
      <SocialBarIcon link="https://github.com/matwjablonski" icon={faGithub} />
      <SocialBarIcon
        link="https://www.linkedin.com/in/mateusz-jablonski/"
        icon={faLinkedin}
      />
      <SocialBarIcon
        link="https://www.instagram.com/mat.w.jablonski"
        icon={faInstagram}
      />
      <SocialBarIcon
        link="https://stackoverflow.com/users/5757095/mateusz-jabłoński"
        icon={faStackOverflow}
      />
      <SocialBarIcon link="https://codepen.io/matwjablonski" icon={faCodepen} />
    </SocialBarWrapper>
  </Grid>
);

export default SocialBar;

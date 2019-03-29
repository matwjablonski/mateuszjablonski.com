import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { th } from '@smooth-ui/core-sc';
import styled from 'styled-components';

const AvatarImageBox = styled.div`
  align-items: center;
  border: 1px solid ${th('lightGrey')};
  border-radius: 50%;
  display: flex;
  font-size: ${th('rootSize')};
  height: 136px;
  justify-content: center;
  margin: 4em auto 2em;
  width: 136px;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  height: 130px;
  border: 1px solid transparent;
`;

const Avatar = props => (
  <Link to='/'>
    <AvatarImageBox>
      <AvatarImage src={`https://www.gravatar.com/avatar/${props.hash}?s=${props.size}`} />
    </AvatarImageBox>
  </Link>
);

Avatar.propTypes = {
  hash: PropTypes.string,
  size: PropTypes.number,
};

Avatar.defaultProps = {
  size: 400,
};

export default Avatar;

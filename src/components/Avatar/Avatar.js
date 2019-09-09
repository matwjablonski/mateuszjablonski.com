import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AvatarImage, AvatarImageBox } from './Avatar.style';
import Loading from '../Loading/Loading';
import { MeContext } from '../../meContext';

const Avatar = ({ size }) => {
  const me = useContext(MeContext);

  return (
    <Link to="/">
      <AvatarImageBox>
        {me ? (
          <AvatarImage
            src={`https://www.gravatar.com/avatar/${me.avatar.hash}?s=${size}`}
            alt={me.name}
          />
        ) : (
          <Loading />
        )}
      </AvatarImageBox>
    </Link>
  );
};

export default Avatar;

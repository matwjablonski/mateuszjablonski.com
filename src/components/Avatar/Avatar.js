import React from 'react';
import { Link } from 'react-router-dom';

import { AvatarImage, AvatarImageBox } from './Avatar.style';
import Loading from '../Loading/Loading';


const Avatar = (props) => (
  <Link to='/'>
    <AvatarImageBox>
      {props.me ? 
      <AvatarImage
        src={`https://www.gravatar.com/avatar/${props.me.avatar.hash}?s=${props.size}`}
        alt={props.me.name}  
      /> : <Loading />
      }
    </AvatarImageBox>
  </Link>
)

export default Avatar;

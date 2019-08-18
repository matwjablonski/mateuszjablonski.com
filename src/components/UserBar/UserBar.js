import React, { useContext } from 'react';
import { Grid } from '@smooth-ui/core-sc';
import { UserBarWrapper } from './UserBar.style';
import { UserContext } from '../../userContext';

const UserBar = () => {
  const context = useContext(UserContext);

  const { user } = context;

  console.log(context.user.name);
  return user.name ? (
    <UserBarWrapper>
      <Grid>Cześć, {user.name}</Grid>
    </UserBarWrapper>
  ) : null;
};

export default UserBar;

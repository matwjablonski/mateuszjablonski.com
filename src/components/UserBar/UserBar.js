import React, { useContext } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { UserBarWrapper, UserBarLink } from './UserBar.style';
import { UserContext } from '../../userContext';

const UserBar = () => {
  const context = useContext(UserContext);

  const { user } = context;

  return user.name ? (
    <UserBarWrapper>
      <Grid>
        <Row alignItems="center">
          <Col xs="auto" mr="auto">
            Cześć, {user.name}
          </Col>
          <Col xs="auto">
            <UserBarLink to="/admin/nowy-post">Dodaj post</UserBarLink>
          </Col>
        </Row>
      </Grid>
    </UserBarWrapper>
  ) : null;
};

export default UserBar;

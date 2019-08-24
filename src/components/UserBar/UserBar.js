import React, { useContext } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { UserBarWrapper, UserBarLink } from './UserBar.style';
import { UserContext } from '../../userContext';
import { Trans } from 'react-i18next';

const UserBar = () => {
  const context = useContext(UserContext);

  const { user } = context;

  return user.name ? (
    <UserBarWrapper>
      <Grid>
        <Row alignItems="center">
          <Col xs="auto" mr="auto">
            <Trans i18nKey="admin.userBar.welcome" name={user.name} />
            {/* Cześć, {user.name} */}
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

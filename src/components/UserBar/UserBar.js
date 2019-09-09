import React, { useContext } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { UserBarWrapper, UserBarLink } from './UserBar.style';
import { UserContext } from '../../userContext';
import { Trans, useTranslation } from 'react-i18next';

const UserBar = () => {
  const context = useContext(UserContext);
  const { user } = context;
  const { t } = useTranslation();

  return user.name ? (
    <UserBarWrapper>
      <Grid>
        <Row alignItems="center">
          <Col xs="auto" mr="auto">
            <Trans
              i18nKey="ADMIN.USER_BAR.WELCOME_MSG"
              values={{ name: user.name }}
            />
          </Col>
          <Col xs="auto">
            <UserBarLink to="/admin">
              {t('ADMIN.USER_BAR.DASHBOARD')}
            </UserBarLink>
          </Col>
        </Row>
      </Grid>
    </UserBarWrapper>
  ) : null;
};

export default UserBar;

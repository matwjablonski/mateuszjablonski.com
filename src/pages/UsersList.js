import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { useTranslation } from 'react-i18next';

import request from '../helpers/request';

import PageTitle from '../components/PageTitle/PageTitle';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import { Table } from '../components/ui/Table';

const UsersList = props => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    request()
      .get('users')
      .then(res => setUsers(res.data.data));
  }, []);

  const headers = [
    {
      xs: 1,
      name: t('ADMIN.USERS_LIST.LP'),
    },
    {
      xs: 4,
      name: t('ADMIN.USERS_LIST.NAME'),
    },
    {
      xs: 3,
      name: t('ADMIN.USERS_LIST.EMAIL'),
    },
    {
      xs: 2,
      name: t('ADMIN.USERS_LIST.TYPE'),
    },
  ];

  const userTableData = users.map((user, index) => ({
    cols: {
      index: {
        name: 'index',
        value: index + 1,
        xs: 1,
      },
      name: {
        name: user.name,
        value: user.name,
        xs: 4,
      },
      email: {
        name: t('abc'),
        value: user.email,
        xs: 3,
      },
      type: {
        value: t(`ADMIN.USER.${user.userType.toUpperCase()}`),
        xs: 2,
      },
    },
    id: user.id,
  }));

  const handleEdit = id => {
    this.props.history.push(`/admin/users/${id}/edit`);
  };

  return (
    <Grid>
      <Row>
        <Col xs="auto">
          <UserSidebar />
        </Col>
        <Col>
          <PageTitle text={t('ADMIN.USERS_LIST.TITLE')} />
          <Table
            items={userTableData}
            headers={headers}
            actions
            edit={id => handleEdit(id)}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default UsersList;

import React, { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useTranslation } from 'react-i18next';
import {
  UserSidebarWrapper,
  UserSidebarLink,
  UserSidebarSeparator,
} from './UserSidebar.style';
import { getUserNavItems } from './userNavigationItems';

const UserSidebar = () => {
  const context = useContext(UserContext);
  const { user } = context;
  const { t } = useTranslation();

  console.log(user.userType);

  const navItems = getUserNavItems(user.userType);

  return (
    <UserSidebarWrapper>
      {navItems.map(navItem =>
        navItem.link ? (
          <UserSidebarLink
            to={navItem.link}
            activeStyle={{
              opacity: 0.5,
            }}
            exact
          >
            {t(navItem.name)}
          </UserSidebarLink>
        ) : (
          <UserSidebarSeparator>{t(navItem.name)}</UserSidebarSeparator>
        )
      )}
    </UserSidebarWrapper>
  );
};

export default UserSidebar;

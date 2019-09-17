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

  const navItems = getUserNavItems(user.userType);

  return (
    <UserSidebarWrapper>
      {navItems.map((navItem, index) =>
        navItem.link ? (
          <UserSidebarLink
            key={`userSidebarLink${index}`}
            to={navItem.link}
            activeStyle={{
              opacity: 0.5,
            }}
            exact
          >
            {t(navItem.name)}
          </UserSidebarLink>
        ) : (
          <UserSidebarSeparator key={`userSidebarSeparator${index}`}>
            {t(navItem.name)}
          </UserSidebarSeparator>
        )
      )}
    </UserSidebarWrapper>
  );
};

export default UserSidebar;

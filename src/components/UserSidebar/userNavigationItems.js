export const getUserNavItems = userType => {
  const navItems = [
    { name: 'ADMIN.NAV.GENERAL', type: ['mentor', 'coursant', 'reader'] },
    {
      name: 'ADMIN.NAV.DASHBOARD',
      link: '/admin',
      type: ['mentor', 'coursant', 'reader'],
    },
    {
      name: 'ADMIN.NAV.POSTS',
      type: ['mentor', 'coursant', 'reader'],
    },
    {
      name: 'ADMIN.NAV.ALL_POSTS',
      link: '/admin/posts',
      type: ['mentor', 'coursant'],
    },
    {
      name: 'ADMIN.NAV.FAVOURITE_POSTS',
      link: '/admin/posts/favourites',
      type: ['mentor', 'coursant', 'reader'],
    },
    {
      name: 'ADMIN.NAV.ADD_NEW_POST',
      link: '/admin/posts/new',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.COURSANTS',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.COURSANTS_LIST',
      link: '/admin/coursants',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.ADD_NEW_COURSANT',
      link: '/admin/coursants/new',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.MY_COURSE',
      type: ['coursant'],
    },
    {
      name: 'ADMIN.NAV.MY_MEETINGS',
      type: ['coursant'],
    },
    {
      name: 'ADMIN.NAV.USERS',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.USERS_LIST',
      link: '/admin/users',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.GLOSSARY',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.NEW_GLOSSARY',
      link: '/admin/glossary/new',
      type: ['mentor'],
    },
    {
      name: 'ADMIN.NAV.SETTINGS',
      type: ['mentor', 'coursant', 'reader'],
    },
    {
      name: 'ADMIN.NAV.MY_ACCOUNT',
      link: '/admin/settings/my-account',
      type: ['mentor', 'coursant', 'reader'],
    },
  ];

  switch (userType) {
    case 'mentor':
      return navItems.filter(item => item.type.indexOf('mentor') !== -1);
    case 'coursant':
      return navItems.filter(item => item.type.indexOf('coursant') !== -1);
    case 'reader':
    default:
      return navItems.filter(item => item.type.indexOf('reader') !== -1);
  }
};

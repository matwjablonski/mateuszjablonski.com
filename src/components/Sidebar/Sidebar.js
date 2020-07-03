import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  SidebarWrapper,
  SidebarMyPhoto,
  SidebarContent,
} from './Sidebar.style';
import { SmallTitle } from '../ui/Title';
import { SmallText } from '../ui/Text';
import { Button, Modal, ModalDialog } from '@smooth-ui/core-sc';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { UserContext, unloggedUser } from '../../userContext';
// import requests from '../../helpers/request';
// import { removeToken } from '../../helpers/token';
import { MeContext } from '../../meContext';
import { auth } from '../../firebase';

const Sidebar = ({ isOpen }) => {
  const { t } = useTranslation();
  const [toggled, onToggle] = useState(false);
  const [modalType, switchModalType] = useState('login');
  const { user, setUser } = useContext(UserContext);
  const me = useContext(MeContext);

  const img =
    me && me.images[Math.floor(Math.random() * Math.floor(me.images.length))];

  const handleSidebarButtonAction = () => {
    if (user.name) {
      auth
        .signOut()
        .then(setUser(unloggedUser));
    } else {
      onToggle(true);
    }
  };

  return me ? (
    <SidebarWrapper className={isOpen && 'isOpen'}>
      <SidebarContent>
        <div>
          <SidebarMyPhoto src={img} alt={me.name} />
          <SmallTitle>{me.name}</SmallTitle>
          <SmallText>{me.description}</SmallText>
        </div>
        <Button onClick={handleSidebarButtonAction} size="lg">
          {user.name
            ? t('GENERAL.AUTH.LOGOUT')
            : t('GENERAL.AUTH.LOGIN_OR_CREATE_ACCOUNT')}
        </Button>
      </SidebarContent>
      <Modal opened={toggled && !user.name} onClose={() => onToggle(false)}>
        <ModalDialog>
          {modalType === 'login' ? (
            <LoginForm switchModalType={switchModalType} onClose={onToggle} />
          ) : (
            <RegisterForm
              switchModalType={switchModalType}
              onClose={onToggle}
            />
          )}
        </ModalDialog>
      </Modal>
    </SidebarWrapper>
  ) : null;
};

export default Sidebar;

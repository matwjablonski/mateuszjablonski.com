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
import { UserContext, unloggedUser } from '../../userContext';
import { MeContext } from '../../meContext';
import { auth } from '../../firebase';
import Newsletter from '../Newsletter/Newsletter';

const Sidebar = ({ isOpen }) => {
  const { t } = useTranslation();
  const [toggled, onToggle] = useState(false);
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
        <div>
          <SmallTitle>{t('GENERAL.NEWSLETTER.SUBSCRIBE')}</SmallTitle>
          <SmallText>{t('GENERAL.NEWSLETTER.DESCRIPTION')}</SmallText>
          <Newsletter/>
        </div>
        <SmallTitle>{t('GENERAL.AUTH.TITLE')}</SmallTitle>
        <SmallText>{t('GENERAL.AUTH.DESCRIPTION')}</SmallText>
        <Button onClick={handleSidebarButtonAction} size="lg">
          {user.name
            ? t('GENERAL.AUTH.LOGOUT')
            : t('GENERAL.AUTH.LOGIN')}
        </Button>
      </SidebarContent>
      <Modal opened={toggled && !user.name} onClose={() => onToggle(false)}>
        <ModalDialog>
          <LoginForm onClose={onToggle} />
        </ModalDialog>
      </Modal>
    </SidebarWrapper>
  ) : null;
};

export default Sidebar;

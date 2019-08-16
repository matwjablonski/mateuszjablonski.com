import React, { useState, useContext } from 'react';
import {
  SidebarWrapper,
  SidebarMyPhoto,
  SidebarContent,
  SidebarModalFooter,
} from './Sidebar.style';
import { SmallTitle } from '../ui/Title';
import { SmallText } from '../ui/Text';
import {
  Button,
  Modal,
  ModalDialog,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from '@smooth-ui/core-sc';
import { userContext } from '../../userContext';

const Sidebar = ({ me, isOpen }) => {
  console.log(me);
  const img =
    me && me.images[Math.floor(Math.random() * Math.floor(me.images.length))];

  const [toggled, onToggle] = useState(false);
  const [modalType, switchModalType] = useState('login');
  const user = useContext(userContext);

  const handleSidebarButtonAction = () => {
    if (user.name) {
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
          {user.name ? 'Twój panel' : 'Zaloguj lub załóż konto'}
        </Button>
      </SidebarContent>
      <Modal opened={toggled && !user.name} onClose={() => onToggle(false)}>
        <ModalDialog>
          <ModalContent border="none" overflow="hidden">
            <ModalHeader border="none">
              <SmallTitle>
                {modalType === 'login' ? 'Zaloguj się' : 'Założ nowe konto'}
              </SmallTitle>
            </ModalHeader>
            <ModalBody>
              {modalType === 'login' ? (
                <>
                  <FormGroup>
                    <Label htmlFor="form-group-email">Twój email</Label>
                    <Input
                      control
                      id="form-group-email"
                      type="email"
                      placeholder="Podaj swój adres email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="form-group-login">Hasło</Label>
                    <Input
                      control
                      id="form-group-login"
                      type="password"
                      placeholder="Wprowadź swoje hasło"
                    />
                  </FormGroup>
                </>
              ) : (
                <>
                  <FormGroup>
                    <Label htmlFor="form-group-name">Imię i nazwisko</Label>
                    <Input
                      control
                      id="form-group-name"
                      type="text"
                      placeholder="Podaj swoje imię i nazwisko"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="form-group-email">Twój email</Label>
                    <Input
                      control
                      id="form-group-email"
                      type="email"
                      placeholder="Podaj swój adres email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="form-group-password">Twoje hasło</Label>
                    <Input
                      control
                      id="form-group-password"
                      type="password"
                      placeholder="Podaj swoje unikalne hasło"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="form-group-repeat-password">
                      Powtórz hasło
                    </Label>
                    <Input
                      control
                      id="form-group-repeat-password"
                      type="password"
                      placeholder="Podaj ponownie swoje hasło, powinno być takie samo"
                    />
                  </FormGroup>
                </>
              )}
            </ModalBody>
            <SidebarModalFooter>
              {modalType === 'login' && (
                <Button onClick={() => switchModalType('new-account')}>
                  Chcę założyć nowe konto
                </Button>
              )}
              {modalType === 'new-account' && (
                <Button onClick={() => switchModalType('login')}>
                  Mam już konto, chcę się zalogować
                </Button>
              )}
              <Button variant="light">
                {modalType === 'login' ? 'Zaloguj' : 'Załóż nowe konto'}
              </Button>
            </SidebarModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </SidebarWrapper>
  ) : null;
};

export default Sidebar;

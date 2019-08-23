import React, { useContext } from 'react';
import { Formik } from 'formik';
import {
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from '@smooth-ui/core-sc';
import { SmallTitle } from '../ui/Title';
import { SidebarModalFooter } from '../Sidebar/Sidebar.style';
import requests from '../../helpers/request';
import { UserContext } from '../../userContext';
import { keepToken } from '../../helpers/token';

const LoginForm = ({ switchModalType, onClose }) => {
  const user = useContext(UserContext);

  const handleLogin = values => {
    requests()
      .post('users/login', values)
      .then(res => {
        keepToken(res.data.data.token);
        //
      })
      .then(() => {
        requests()
          .get('users/me')
          .then(res => user.setUser(res.data.data));
      })
      .then(() => {
        onClose(false);
      });
  };

  return (
    <ModalContent border="none" overflow="hidden">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader border="none">
              <SmallTitle>Zaloguj się</SmallTitle>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label htmlFor="form-group-email">Twój email</Label>
                <Input
                  control
                  id="form-group-email"
                  type="email"
                  name="email"
                  placeholder="Podaj swój adres email"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="form-group-login">Hasło</Label>
                <Input
                  control
                  id="form-group-login"
                  type="password"
                  name="password"
                  placeholder="Wprowadź swoje hasło"
                  onChange={handleChange}
                />
              </FormGroup>
            </ModalBody>
            <SidebarModalFooter>
              <Button
                type="button"
                onClick={() => switchModalType('new-account')}
              >
                Chcę założyć nowe konto
              </Button>
              <Button variant="light" type="submit" onClick={handleSubmit}>
                Zaloguj
              </Button>
            </SidebarModalFooter>
          </form>
        )}
      </Formik>
    </ModalContent>
  );
};

export default LoginForm;

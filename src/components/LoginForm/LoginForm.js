import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
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
import { auth } from '../../firebase';

const LoginForm = ({ switchModalType, onClose }) => {
  const user = useContext(UserContext);
  const { t } = useTranslation();

  const handleLogin = values => {
    console.log(values);
    auth.signInWithEmailAndPassword();
    // requests()
    //   .post('users/login', values)
    //   .then(res => keepToken(res.data.data.token))
    //   .then(() => {
    //     requests()
    //       .get('users/me')
    //       .then(res => user.setUser(res.data.data))
    //       .then(() => onClose(false));
    //   });
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
              <SmallTitle>{t('GENERAL.AUTH.LOGIN')}</SmallTitle>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label htmlFor="form-group-email">
                  {t('GENERAL.AUTH.LOGIN_FORM.EMAIL.LABEL')}
                </Label>
                <Input
                  control
                  id="form-group-email"
                  type="email"
                  name="email"
                  placeholder={t('GENERAL.AUTH.LOGIN_FORM.EMAIL.PLACEHOLDER')}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="form-group-login">
                  {t('GENERAL.AUTH.LOGIN_FORM.PASSWORD.LABEL')}
                </Label>
                <Input
                  control
                  id="form-group-login"
                  type="password"
                  name="password"
                  placeholder={t(
                    'GENERAL.AUTH.LOGIN_FORM.PASSWORD.PLACEHOLDER'
                  )}
                  onChange={handleChange}
                />
              </FormGroup>
            </ModalBody>
            <SidebarModalFooter>
              <Button
                type="button"
                onClick={() => switchModalType('new-account')}
              >
                {t('GENERAL.AUTH.WANT_NEW_ACCOUNT')}
              </Button>
              <Button variant="light" type="submit" onClick={handleSubmit}>
                {t('GENERAL.AUTH.LOGIN')}
              </Button>
            </SidebarModalFooter>
          </form>
        )}
      </Formik>
    </ModalContent>
  );
};

export default LoginForm;

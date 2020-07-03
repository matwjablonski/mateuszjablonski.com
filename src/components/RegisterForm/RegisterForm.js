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
import { UserContext } from '../../userContext';
import { auth } from '../../firebase';
import { requestDocAddNew } from '../../helpers/request';

const RegisterForm = ({ switchModalType, onClose }) => {
  const user = useContext(UserContext);
  const { t } = useTranslation();

  const handleRegister = ({ email, password, name }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        user.setUser(res.user);
        requestDocAddNew('users', {
          name,
          email
        })
          .then(() => onClose(false));
      })
  };

  return (
    <ModalContent border="none" overflow="hidden">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleRegister}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader border="none">
              <SmallTitle>{t('GENERAL.AUTH.CREATE_ACCOUNT')}</SmallTitle>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label htmlFor="form-group-email">
                  {t('GENERAL.AUTH.REGISTER_FORM.EMAIL.LABEL')}
                </Label>
                <Input
                  control
                  id="form-group-email"
                  type="email"
                  name="email"
                  placeholder={t(
                    'GENERAL.AUTH.REGISTER_FORM.EMAIL.PLACEHOLDER'
                  )}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="form-group-name">
                  {t('GENERAL.AUTH.REGISTER_FORM.NAME.LABEL')}
                </Label>
                <Input
                  control
                  id="form-group-name"
                  type="text"
                  name="name"
                  placeholder={t('GENERAL.AUTH.REGISTER_FORM.NAME.PLACEHOLDER')}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="form-group-password">
                  {t('GENERAL.AUTH.REGISTER_FORM.PASSWORD.LABEL')}
                </Label>
                <Input
                  control
                  id="form-group-password"
                  type="password"
                  name="password"
                  placeholder={t(
                    'GENERAL.AUTH.REGISTER_FORM.PASSWORD.PLACEHOLDER'
                  )}
                  onChange={handleChange}
                />
              </FormGroup>
            </ModalBody>
            <SidebarModalFooter>
              <Button type="button" onClick={() => switchModalType('login')}>
                {t('GENERAL.AUTH.HAVE_ACCOUNT_LOGIN')}
              </Button>
              <Button variant="light" type="submit" onClick={handleSubmit}>
                {t('GENERAL.AUTH.CREATE_ACCOUNT')}
              </Button>
            </SidebarModalFooter>
          </form>
        )}
      </Formik>
    </ModalContent>
  );
};

export default RegisterForm;

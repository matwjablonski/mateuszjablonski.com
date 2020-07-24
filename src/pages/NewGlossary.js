import React, { useContext } from 'react';
import { FormGroup, Grid, Row, Col, Button } from '@smooth-ui/core-sc';
import { MarkdownEditorTextarea } from '../components/MarkdownEditor/MarkdownEditor.style';
import Ups from '../components/Ups/Ups';
import { UserContext } from '../userContext';
import PageTitle from '../components/PageTitle/PageTitle';
import { SmallLabel } from '../components/ui/SmallLabel';
import { TextInput } from '../components/ui/TextInput';
import UserSidebar from '../components/UserSidebar/UserSidebar';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { encodeText } from '../helpers/text';
import { requestDocAddNew } from '../helpers/request';

const NewGlossary = () => {
  const { t } = useTranslation();
  const userData = useContext(UserContext);

  const { user } = userData;

  const handleSave = (values, { resetForm }) => {
    requestDocAddNew('glossary', {
      entry: values.entry,
      fullName: values.fullName,
      description: encodeText(values.description),
    })
      .then(() => {
        resetForm();
      });
  };

  return user.name && user.permissions.indexOf('CAN_CREATE_GLOSSARY') !== -1 ? (
    <Grid>
      <Row>
        <Col xs="auto">
          <UserSidebar/>
        </Col>
        <Col>
          <PageTitle text={t('ADMIN.NEW_GLOSSARY.TITLE')}/>
          <Formik
            initialValues={{
              entry: '',
              fullName: '',
              description: '',
            }}
            onSubmit={handleSave}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-entry">
                    {t('ADMIN.NEW_GLOSSARY.FORM.ENTRY.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-entry"
                    type="text"
                    name="entry"
                    placeholder={t('ADMIN.NEW_GLOSSARY.FORM.ENTRY.PLACEHOLDER')}
                    value={values.entry}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="form-group-full-name">
                    {t('ADMIN.NEW_GLOSSARY.FORM.FULL_NAME.LABEL')}
                  </SmallLabel>
                  <TextInput
                    control
                    id="form-group-full-name"
                    type="text"
                    name="fullName"
                    placeholder={t(
                      'ADMIN.NEW_GLOSSARY.FORM.FULL_NAME.PLACEHOLDER',
                    )}
                    value={values.fullName}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <SmallLabel htmlFor="new-post-description">
                    {t('ADMIN.NEW_GLOSSARY.FORM.DESCRIPTION.LABEL')}
                  </SmallLabel>
                  <MarkdownEditorTextarea
                    id="new-post-description"
                    height="auto"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    placeholder={t(
                      'ADMIN.NEW_GLOSSARY.FORM.DESCRIPTION.PLACEHOLDER',
                    )}
                  />
                </FormGroup>
                <Button type="submit">
                  {t('ADMIN.NEW_GLOSSARY.FORM.SUBMIT')}
                </Button>
              </form>
            )}
          </Formik>
        </Col>
      </Row>
    </Grid>
  ) : (
    <Ups text={t('ERRORS.WITHOUT_PERMISSION')}/>
  );
};

export default NewGlossary;
